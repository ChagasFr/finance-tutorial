import { z } from "zod";
import { AccountForm } from "./account-form";
import { useNewAccount } from "../hooks/use-new-account"


import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { insertAccountSchema } from "@/db/schema";

const formSchema = insertAccountSchema.pick({
    name: true,
});

type FormValues = z.input<typeof formSchema>;

export const NewAccountSheet = () => {
    const { isOpen, onClose } = useNewAccount();

    const onSubmit = (values: FormValues) => {
        console.log({ values });
    }

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
                    <AccountForm onSubmit={onSubmit} disabled={false} defaultValues={{ name: "" }} />
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}