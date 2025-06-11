import { Row } from "@tanstack/react-table";
import { TypeOfPayment } from "@/components/custom/table/page.d";
import { Checkbox } from "@/components/ui/checkbox";

export default function CSelect({ row }: { row: Row<TypeOfPayment> }) {
    return (
        <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="select row"
        />
    )
}