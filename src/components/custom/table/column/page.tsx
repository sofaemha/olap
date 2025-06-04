import { Payment } from "@/components/custom/table/page.d"

import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { ColumnDef as useType } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import CSelect from "@/components/custom/table/column/cell/select"
import CAmount from "@/components/custom/table/column/cell/amount"
import CCell from "@/components/custom/table/column/cell/cell"
import HSelect from "@/components/custom/table/column/header/select"
import HSort from "@/components/custom/table/column/header/sort"

const c_select: useType<Payment>[] = [
    {
        id: "select",
        enableSorting: false,
        enableHiding: false,
        header: ({ table }) => <HSelect table={table} />,
        cell: ({ row }) => <CSelect row={row} />,
    },
]

const c_status: useType<Payment>[] = [
    {
        accessorKey: "status",
        header: ({ column }) => <HSort column={column}>Status</HSort>,
        cell: ({ row }) => <CCell row={row} value={"status"} className="capitalize" />,
    },
]

const c_email: useType<Payment>[] = [
    {
        accessorKey: "email",
        header: ({ column }) => <HSort column={column}>E-Mail</HSort>,
        cell: ({ row }) => <CCell row={row} value={"email"} className="lowercase" />,
    },
]

const c_amount: useType<Payment>[] = [
    {
        accessorKey: "amount",
        header: ({ column }) => <HSort column={column}>Amount</HSort>,
        cell: ({ row }) => <CAmount row={row} />,
    },
]

export const columns: useType<Payment>[] = [
    ...c_select,
    ...c_status,
    ...c_email,
    ...c_amount,
]
