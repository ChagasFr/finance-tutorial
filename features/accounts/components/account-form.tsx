import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { insertAccountSchema } from "@/db/schema";
import { Input } from "@/components/ui/input"

import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form"

const formSchema = insertAccountSchema.pick({
    name: true,
});

type FormValues = z.input<typeof formSchema>;

type Props = {
    id?: string;
    defaultValues?: FormValues;
    onSubmit: (values: FormValues) => void;
    onDelete?: () => void;
    disabled?: boolean;
};

export const AccountForm = ({
    id,
    defaultValues,
    onSubmit,
    onDelete,
    disabled
}: Props) => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues,
    });

    const handleSubmit = (values: FormValues) => {
        console.log({ values });
    };

    const handleDelete = () => {
        onDelete?.();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 pt-4">
                <FormField name="name" control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                            Name
                        </FormLabel>
                        <FormControl>
                            <Input disabled={disabled} placeholder="e.g. Cash, Bank, Creadit Card" {...field} />
                        </FormControl>
                    </FormItem>
                )}
                />
            </form>
        </Form>
    )

}