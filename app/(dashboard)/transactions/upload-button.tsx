import { Upload } from "lucide-react";
import { useCSVReader } from "react-papaparse";

import { Button } from "@/components/ui/button";

type Props = {
    onUpload: (results: any) => void;
};

export const UploadButton = ({ onUpload }: Props) => {
    const { CSVReader } = useCSVReader();

    // TODO: add a paywall

    return (
        <CSVReader>
            {({ getRootProps }: any) => (
                <Button>

                </Button>
            )}
        </CSVReader>
    )
}