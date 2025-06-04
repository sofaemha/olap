import { Row } from "@tanstack/react-table";
import { Payment } from "@/components/custom/table/page.d";

export default function CCell({ row, value, className }: { row: Row<Payment>; value: string; className?: string; }) {
    return <div className={className}>{row.getValue(value)}</div>
}