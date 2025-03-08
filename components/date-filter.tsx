"use client";

import qs from "query-string";
import { format, subDays } from "date-fns";
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
    return (
        <div>

        </div>
    );
};