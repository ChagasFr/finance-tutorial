import { format } from "date-fns"

import { formatCurrency } from "@/lib/utils"
import { Separator } from "@radix-ui/react-separator";


export const CustomTooltip = ({ active, payload }: any) => {
    if (!active) return null;

    const date = payload[0].payload.date;
    const income = payload[0].value;
    const expenses = payload[0].value;
}