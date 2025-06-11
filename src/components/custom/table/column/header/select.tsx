import { Table } from "@tanstack/react-table";
import { TypeOfPayment } from "@/components/custom/table/page.d";
import { Checkbox } from "@/components/ui/checkbox";

export default function HSelect({ table }: { table: Table<TypeOfPayment> }) {
    return (
        <Checkbox
            checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
        />
    )
}