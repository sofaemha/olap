import { Table } from "@tanstack/react-table";
import { Payment } from "@/components/custom/table/page.d";
import { Checkbox } from "@/components/ui/checkbox";

export default function HSelect({ table }: { table: Table<Payment> }) {
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