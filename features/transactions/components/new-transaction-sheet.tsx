import { z } from "zod";
import { useNewTransaction } from "../hooks/use-new-transaction";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { insertTransactionSchema } from "@/db/schema";
import { useCreateTransaction } from "../api/use-create-transaction";
import { useCreateCategory } from "@/features/categories/api/use-create-category";
import useGetCaregory from "@/features/categories/api/use-get-category";
import useGetAccounts from "@/features/accounts/api/use-get-accounts";
import { useCreateAccount } from "@/features/accounts/api/use-create-account";
import { TransactionForm } from "./transaction-form";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
    date: z.coerce.date(),
    accountId: z.string(),
    categoryId: z.string().nullable().optional(),
    payee: z.string(),
    amount: z.string(),
    notes: z.string().nullable().optional(),
});

type FormValues = z.input<typeof formSchema>;

export const NewTransactionSheet = () => {
    const { isOpen, onClose } = useNewTransaction();

    const createMutation = useCreateTransaction();

    const categoryQuery = useGetCaregory();
    const categoryMutation = useCreateCategory();
    const onCreateCategory = (name: string) => categoryMutation.mutate({
        name
    });
    const categoryOptions = (categoryQuery.data ?? []).map((category) => ({
        label: category.name,
        value: category.id,
    }));

    const accountQuery = useGetAccounts();
    const accountMutation = useCreateAccount();
    const onCreateAccount = (name: string) => accountMutation.mutate({
        name
    });
    const accountOptions = (accountQuery.data ?? []).map((account) => ({
        label: account.name,
        value: account.id,
    }));

    const isPending =
        createMutation.isPending ||
        categoryMutation.isPending ||
        accountMutation.isPending;

    const isLoading =
        categoryQuery.isLoading ||
        accountQuery.isLoading;

    const onSubmit = (values: FormValues) => {
        createMutation.mutate(values, {
            onSuccess: () => {
                onClose();
            },
        });
    }

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetHeader>
                        <SheetTitle>
                            New Transaction
                        </SheetTitle>
                        <SheetDescription>
                            Add a new transaction
                        </SheetDescription>
                    </SheetHeader>
                    {isLoading
                        ? (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Loader2 className="size-4 text-muted-foreground animate-spin" />
                            </div>
                        )
                        : (
                            <TransactionForm
                                onSubmit={onSubmit}
                                disabled={isPending}
                                categoryOptions={categoryOptions}
                                onCreateCategory={onCreateCategory}
                                accountOptions={accountOptions}
                                onCreateAccount={onCreateAccount}
                            />
                        )
                    }
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}