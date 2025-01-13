"use client";
import { useSearchParams } from "next/navigation";
import { FaPiggyBank } from "react-icons/fa";

import useGetSummary from "@/features/summary/api/use-get-summary";

import { formatDateRange } from "@/lib/utils";
import { DataCard } from "./data-card";

export const DataGrid = () => {
    const { data } = useGetSummary();

    const params = useSearchParams();
    const to = params.get("to") || undefined;
    const from = params.get("from") || undefined;

    const dateRangeLabel = formatDateRange({ to, from });

    return (
        <div className="grid grid-cols01 lg:grid-cols-3 gap-8 pb-2 mb-8">
            <DataCard
                title="Remaing"
                value={data?.remainingAmount}
                parcentageChange={data?.remainingChange}
                icon={FaPiggyBank}
                variant="default"
                dateRange={dateRangeLabel}
            />
        </div>
    )
}