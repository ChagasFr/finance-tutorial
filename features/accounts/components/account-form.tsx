import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { insertAccountSchema } from "@/db/schema";

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
        <Form>

        </Form>
    )

}