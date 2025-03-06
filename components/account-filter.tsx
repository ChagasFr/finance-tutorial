"use client";

import qs from "query-string";
import {
    usePathname,
    useRouter,
    useSearchParams
} from "next/navigation";

import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";

import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectItem,
    SelectValue,
} from "@/components/ui/select"

export const AccountFilter = () => {
    return (
        <Select
            value=""
            onValueChange={() => { }}
            disabled={false}
        >
            <SelectTrigger></SelectTrigger>
        </Select>
    )
}