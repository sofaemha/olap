import { Row } from "@tanstack/react-table"
import { TypeOfPayment } from "@/components/custom/table/page.d";

export default function CAmount({ row }: { row: Row<TypeOfPayment> }) {
    const amount = parseFloat(row.getValue("amount"))

    const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount)

    return <div className="text-right font-medium">{formatted}</div>
}