"use client";
import { useState } from "react";

import qs from "query-string";
import { format, formatDate, subDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { Calendar as CalendarIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import {
    usePathname,
    useRouter,
    useSearchParams
} from "next/navigation";

import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";

import { cn, formatDateRange } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { Calendar } from "./ui/calendar";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverClose
} from "@/components/ui/popover";

export const DateFilter = () => {
    const router = useRouter();
    const pathname = usePathname();

    const params = useSearchParams();
    const accountId = params.get("accountId") || "all";
    const from = params.get("from") || "";
    const to = params.get("to") || "";

    const defaultTo = new Date();
    const defaultFrom = subDays(defaultTo, 30);

    const paramState = {
        from: from ? new Date(from) : defaultFrom,
        to: to ? new Date(to) : defaultTo,
    };

    const [] = useState();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    disabled={false}
                    size="sm"
                    variant="outline"
                    className="lg:w-auto w-full h-9 rounded-md px-3 
                    font-normal bg-white/10 hover:bg-white/20 
                    hover:text-white border-none focus:ring-offset-0 
                    focus:ring-transparent outline-none text-white 
                    focus:bg-white/30 transition"
                >
                    <span>{formatDateRange(paramState)}</span>
                </Button>
            </PopoverTrigger>
        </Popover>
    );
};