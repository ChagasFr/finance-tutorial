import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { cn } from "@/lib/utils";

type Props = {
    columnIndex: number;
    selectedColumns: Record<string, string | null>;
    onChange: (
        columnIndex: number,
        value: string | null
    ) => void;
};

const options = [
    "amount",
    "payee",
    "notes",
    "date",
];

export const TableHeadSelect = ({
    columnIndex,
    selectedColumns,
    onChange
}: Props) => {
    const currentSelect = selectedColumns[`column_${columnIndex}`];

    return (
        <Select
            value={currentSelection || ""}
            onValueChange={(value) => onChange(columnIndex, value)}
        >
            <SelectTrigger
                className={cn(
                    "focus:ring-offset-0 focus:ring-transparent outilne-none border-none bg-transparent capitalize",
                    currentSelection && "text-blue-500"
                )}
            >
                <SelectValue placeholder="Skip" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="skip">Skip</SelectItem>
                {options.map((option, index) => {
                    return (
                        <SelectItem key={index} value={option} disabled={disabled} className="capitalize" />

                    )
                })}
            </SelectContent>

        </Select>

    )
}