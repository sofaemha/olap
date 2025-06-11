import { Row } from "@tanstack/react-table";
import { TypeOfPayment } from "@/components/custom/table/page.d";

export default function CCell({ row, value, className }: { row: Row<TypeOfPayment>; value: string; className?: string; }) {
    return <div className={className}>{row.getValue(value)}</div>
}