import { format } from "date-fns"
import { Tooltip, XAxis, AreaChart, Area, ResponsiveContainer, CartesianGrid } from "recharts"

import { CustomTooltip } from "./custom-tooltip"
import { BarChart } from "lucide-react";

type Props = {
    data: {
        date: string;
        income: number;
        expenses: number;
    }[];
}

export const BarVariant = ({ data }: Props) => {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    axisLine={false}
                    tickLine={false}
                    dataKey="date"
                    tickFormatter={(value) => format(value, "dd MMM")}
                    style={{ fontSize: "12px" }}
                    tickMargin={16}
                />
            </BarChart>
        </ResponsiveContainer>
    )
}