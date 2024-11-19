import { useOpenAccount } from "@/features/accounts/hooks/use-open-transaction";

import { cn } from "@/lib/utils";

type Props = {
    id: string;
    account: string;
    accountId: string;
}

export const AccountColumn = ({
    account,
    accountId
}: Props) => {
    const { onOpen: onOpenAccount } = useOpenAccount();

    const onClick = () => {
        onOpenAccount(accountId);
    }

    return (
        <div className="flex items-center cursor-pointer hover:underline">
            {account}
        </div>
    )
}