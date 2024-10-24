import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { insertAccountSchema, insertTransactionSchema } from "@/db/schema";
import { Input } from "@/components/ui/input"

import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { DatePicker } from "@/components/date-picker";
import { Select } from "@/components/select";

const formSchema = z.object({
    date: z.coerce.date(),
    accountId: z.string(),
    categoryId: z.string().nullable().optional(),
    payee: z.string(),
    amount: z.string(),
    notes: z.string().nullable().optional(),
});

const apiSchema = insertTransactionSchema.omit({
    id: true,
});

type FormValues = z.input<typeof formSchema>;
type ApiFormValues = z.input<typeof apiSchema>;

type Props = {
    id?: string;
    defaultValues?: FormValues;
    onSubmit: (values: ApiFormValues) => void;
    onDelete?: () => void;
    disabled?: boolean;
    accountOptions: { label: string; value: string; }[];
    categoryOptions: { label: string; value: string; }[];
    onCreateAccount: (name: string) => void;
    onCreateCategory: (name: string) => void;
};

export const TransactionForm = ({
    id,
    defaultValues,
    onSubmit,
    onDelete,
    disabled,
    accountOptions,
    categoryOptions,
    onCreateAccount,
    onCreateCategory
}: Props) => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues,
    });

    const handleSubmit = (values: FormValues) => {
        onSubmit(values);
    };

    const handleDelete = () => {
        onDelete?.();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 pt-4">
                <FormField name="date" control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <DatePicker />
                        </FormControl>
                    </FormItem>
                )}

                />

                <FormField name="accountId" control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                            Account
                        </FormLabel>
                        <FormControl>
                            <Select placeholder="Select an account" options={accountOptions} onCreate={onCreateAccount} value={field.value} onChange={field.onChange} disabled={disabled} />
                        </FormControl>
                    </FormItem>
                )}

                />
                <FormField name="categoryId" control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>
                            Category
                        </FormLabel>
                        <FormControl>
                            <Select placeholder="Select an Category" options={categoryOptions} onCreate={onCreateCategory} value={field.value} onChange={field.onChange} disabled={disabled} />
                        </FormControl>
                    </FormItem>
                )}
                />

                <Button className="w-full" disabled={disabled}>
                    {id ? "Save Changes" : "Create account"}
                </Button>
                {!!id && (<Button type="button" disabled={disabled} onClick={handleDelete} className="w-full" variant="outline">
                    <Trash className="size-4 mr-2" />
                    Delete account
                </Button>)}
            </form>
        </Form>
    )

}