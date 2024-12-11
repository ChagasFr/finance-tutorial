import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

type Props = {
    headers: string[];
    body: string[][];
    selecctedColumns: Record<string, string | null>;
    onTableHeadSelectChange: (columnIndex: number, value: string | null)
}