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
    <Popover>
        <PopoverTrigger asChild>
            <Button disabled={disabled} variant="outline" className="" />
        </PopoverTrigger>
    </Popover>
}