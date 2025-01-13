import { IconType } from "react-icons/lib";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const boxVariant = cva(
    "shrink-0 rounded-md p-3",
    {
        variants: {
            variant: {
                default: "bg-blue-500/20",
                sucess: "bg-blue-500/20",
                danger: "bg-blue-500/20",
                warning: "bg-blue-500/20",
            }
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

const iconVariant = cva(
    "size-6",
    {
        variants: {
            variant: {
                default: "fill-blue-500",
                sucess: "fill-blue-500",
                danger: "fill-blue-500",
                warning: "fill-blue-500",
            }
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

type BoxVariants = VariantProps<typeof boxVariant>;
type IconVariants = VariantProps<typeof iconVariant>;

interface DataCardProps extends BoxVariants, IconVariants {
    icon: IconType;
    title: string;
    value?: number;
    dateRange: string;
    percentageChange?: number;
}

export const DataCard = ({
    icon: Icon,
    title,
    value = 0,
    variant,
    dateRange,
    percentageChange = 0,
}: DataCardProps) => {
    return (
        <Card className="border-none drop-shadow-sm">
            <CardHeader className="flex fle-row items-center justify-between gap-x-4">
                <div className="space-y-2">
                    <CardTitle className="text-2xl line-clamp-1">
                        {title}
                    </CardTitle>
                    <CardDescription className="line-clamp1">
                        {dateRange}
                    </CardDescription>
                </div>
                <div className={cn(boxVariant({ variant }))}>
                    <Icon className={cn(iconVariant({ variant }))} />
                </div>
            </CardHeader>
        </Card>
    )
}