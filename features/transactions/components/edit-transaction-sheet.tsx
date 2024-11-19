import { z } from "zod";
import { AccountForm } from "./transaction-form";
import { useEditTransactions } from "../api/use-edit-transaction";


import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { insertAccountSchema } from "@/db/schema";
import { useGetTransaction } from "../api/use-get-transaction";
import { Loader2 } from "lucide-react";
import { useConfirm } from "@/hooks/use-confirm";
import { useOpenTransaction } from "@/features/accounts/hooks/use-open-transaction";
import { useDeleteTransaction } from "../api/use-delete-transaction";

const formSchema = insertAccountSchema.pick({
    name: true,
});

type FormValues = z.input<typeof formSchema>;

export const EditTransactionSheet = () => {
    const { isOpen, onClose, id } = useOpenTransaction();

    const [ConfirmDialog, confirm] = useConfirm(
        "Are you sure?",
        "You are about to delete this account."
    )

    const accountQuery = useGetTransaction(id);
    const editMutation = useEditTransactions(id);
    const deleteMutation = useDeleteTransaction(id);


    const isPending =
        editMutation.isPending ||
        deleteMutation.isPending

    const isLoading = accountQuery.isLoading;

    const onSubmit = (values: FormValues) => {
        editMutation.mutate(values, {
            onSuccess: () => {
                onClose();
            },
        });
    }

    const onDelete = async () => {
        const ok = await confirm();

        if (ok) {
            deleteMutation.mutate(undefined, {
                onSuccess: () => {
                    onClose();
                }
            });
        }
    }

    const defaultValues = accountQuery.data ? {
        name: accountQuery.data.name
    } : {
        name: "",
    };

    return (
        <>
            <ConfirmDialog />
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent className="space-y-4">
                    <SheetHeader>
                        <SheetHeader>
                            <SheetTitle>
                                Edit Account
                            </SheetTitle>
                            <SheetDescription>
                                Edit an existing account
                            </SheetDescription>
                        </SheetHeader>
                        {isLoading
                            ? (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Loader2 className="size-4 text-muted-foreground animate-spin" />

                                </div>
                            ) : (
                                <AccountForm id={id} onSubmit={onSubmit} disabled={isPending} defaultValues={defaultValues} onDelete={onDelete} />
                            )
                        }
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    )
}