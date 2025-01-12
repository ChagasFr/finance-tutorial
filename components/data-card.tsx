import { IconType } from "react-icons/lib";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const boxVariant = cva(
    "rounded-md p-3",
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

interface DataCardProps extends BoxVariants, IconVariants

export const DataCard = () => {
    return (
        <div>
            Data Card
        </div>
    )
}