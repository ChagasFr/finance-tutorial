import { useNewAccount } from "../hooks/use-new-account"
import { AccountForm } from "./account-form";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"

export const NewAccountSheet = () => {
    const { isOpen, onClose } = useNewAccount();

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
                    <AccountForm onSubmit={() => { }} disabled={false} />
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}