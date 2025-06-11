import { Column } from "@tanstack/react-table";
import { TypeOfPayment } from "@/components/custom/table/page.d";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { cn } from "@/components/shadcn/utility";

export default function HSort({ column, children, className }: {
    column: Column<TypeOfPayment>; children: React.ReactNode; className?: string;
}) {
    return (
        <Button
            variant="ghost"
            className={cn("w-full", className)}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            {children}
            <ArrowUpDown />
        </Button>
    )
}