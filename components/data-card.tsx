import { IconType } from "react-icons/lib";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const boxVariant = cva(
    "roudende-md p-3",
    {
        variants: {
            variant: {
                default: "bg-blue-500/20",
                sucess: "bg-blue-500/20",
                danger: "bg-blue-500/20",
                warning: "bg-blue-500/20",
            }
        }
    }
)
export const DataCard = () => {
    return (
        <div>
            Data Card
        </div>
    )
}