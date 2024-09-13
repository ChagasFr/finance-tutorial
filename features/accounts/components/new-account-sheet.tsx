import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet"

export const NewAccountSheet = () => {
    return (
        <Sheet open>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetHeader>
                        New Account
                    </SheetHeader>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}