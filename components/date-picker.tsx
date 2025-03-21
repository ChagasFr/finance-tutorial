import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { SelectSingleEvenHandler } from "react-day-picker"

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type Props = {
    value?: Date;
    onChange?: SelectSingleEvenHandler;
    disabled?: boolean;
};

export const DatePicker = ({
    value,
    onChange,
    disabled,
}: Props) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button disabled={disabled} variant="outline" className={cn("w-full justify-start text-left font-normal", !value && "text-muted-foreground",)}>
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Calendar mode="single" selected={value} onSelected={onChange} disabled={disabled} initialFocus />
            </PopoverContent>
        </Popover>
    )
}