import { useState } from "react";
import { FileSearch, PieChart, Radar, Target } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { AreaVariant } from "./area-variant";
import { BarVariant } from "./bar-variant";
import { LineVariant } from "./line-variant";

type Props = {
    data?: {
        income: number;
        expenses: number;
    }[];
};

export const SpendingPie = ({ data = [] }: Props) => {
    const [chartType, setChartType] = useState("pie");

    const onTypeChange = (type: string) => {
        // TODO: Add paywall
        setChartType(type)
    };

    return (
        <Card className="border-none drop-shadow-sm">
            <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
                <CardTitle className="text-xl line-clamp-1">
                    Transactions
                </CardTitle>
                <Select defaultValue={chartType} onValueChange={onTypeChange}>
                    <SelectTrigger className="lg:w-auto h-9 rounded-md px-3">
                        <SelectValue placeholder="Chart type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pie">
                            <div className="flex items-center">
                                <PieChart className="size-4 mr-4 shrink-0" />
                                <p className="line-clamp-1">
                                    Pie chart
                                </p>
                            </div>
                        </SelectItem>

                        <SelectItem value="radar">
                            <div className="flex items-center">
                                <Radar className="size-4 mr-4 shrink-0" />
                                <p className="radar-clamp-1">
                                    Radar chart
                                </p>
                            </div>
                        </SelectItem>

                        <SelectItem value="bar">
                            <div className="flex items-center">
                                <BarChart className="size-4 mr-4 shrink-0" />
                                <p className="line-clamp-1">
                                    Bar chart
                                </p>
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent>
                {data.length === 0 ? (
                    <div className="flex flex-col gap-y-4 items-center justify-center h-[350px] w-full">
                        <FileSearch className="size-6 text-muted-foreground" />
                        <p className="text-muted-foreground text-sm">
                            No data for this period
                        </p>
                    </div>
                ) : (
                    <>
                        {chartType === "line" && <LineVariant data={data} />}
                        {chartType === "area" && <AreaVariant data={data} />}
                        {chartType === "bar" && <BarVariant data={data} />}
                    </>
                )}
            </CardContent>
        </Card>
    )
}