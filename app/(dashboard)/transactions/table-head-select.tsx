import { Select } from "@/components/select";
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
                    "focus:ring-offset-0 focus:ring-transparent outilne-none"
                )}
            >

            </SelectTrigger>

        </Select>

    )
}