import useGetAccounts from "../api/use-get-accounts";
import { useCreateAccount } from "../api/use-create-account";

import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { DialogFooter, DialogHeader, Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useRef, useState } from "react"

export const useSelectAccount = (
    title: string,
    message: string,
): [() => JSX.Element, () => Promise<unknown>] => {
    const accountQuery = useGetAccounts();
    const accountMutation = useCreateAccount();
    const onCreateAccount = (name: string) => accountMutation.mutate({
        name
    });

    const accountOptions = (accountQuery.data ?? []).map((account) => ({
        label: account.name,
        value: account.id
    }))

    const [promise, setPromise] = useState<{
        resolve: (values: string | undefined) =>
            void
    } | null>(null);
    const selectValue = useRef<string>();

    const confirm = () => new Promise((resolve, reject) => {
        setPromise({ resolve });
    });

    const handleClose = () => {
        setPromise(null);
    };

    const handleConfirm = () => {
        promise?.resolve(selectValue.current);
        handleClose();
    };

    const handleCancel = () => {
        promise?.resolve(undefined);
        handleClose();
    };

    const ConfirmationDialog = () => (
        <Dialog open={promise !== null}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Select Account
                    </DialogTitle>
                    <DialogDescription>
                        Please select an account to continue.
                    </DialogDescription>
                </DialogHeader>
                <Select
                    placeholder="Select an account"
                    options={accountOptions}
                    onCreate={onCreateAccount}
                    onChange={(value) => selectValue.current = value}
                    disabled={accountQuery.isLoading || accountMutation.isPeding}
                />
                <DialogFooter className="pt-2">
                    <Button onClick={handleCancel} variant="outline">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm}>
                        Confirm
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );

    return [ConfirmationDialog, confirm];
};