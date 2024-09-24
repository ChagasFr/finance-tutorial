import { z } from "zod";
import { useOpenAccount } from "../hooks/use-get-account";
import { AccountForm } from "./account-form";


import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { insertAccountSchema } from "@/db/schema";
import { useCreateAccount } from "../api/use-create-account";
import useGetAccount from "../api/use-get-account";

const formSchema = insertAccountSchema.pick({
    name: true,
});

type FormValues = z.input<typeof formSchema>;

export const EditAccountSheet = () => {
    const { isOpen, onClose, id } = useOpenAccount();

    const accountQuery = useGetAccount(id);
    const mutation = useCreateAccount();

    const onSubmit = (values: FormValues) => {
        mutation.mutate(values, {
            onSuccess: () => {
                onClose();
            },
        });
    }

    const defaultValues = accountQuery.data ? {
        name: accountQuery.data.name
    } : {
        name: "",
    };

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetHeader>
                        <SheetTitle>
                            New Account
                        </SheetTitle>
                        <SheetDescription>
                            Create a new account to track tour transactions.
                        </SheetDescription>
                    </SheetHeader>
                    <AccountForm onSubmit={onSubmit} disabled={mutation.isPending} defaultValues={defaultValues} />
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}