"use client"

import { ColumnDef } from "@tanstack/react-table"

import { ShelterType } from "@/schema/shelters.schema"

export const columns: ColumnDef<ShelterType>[] = [
  {
    accessorKey: "_id",
    header: "ID",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "limitedCapacity",
    header: "Limited Capacity",
  },
  {
    accessorKey: "currentCapacity",
    header: "Current Capacity",
  },
//   {
//     accessorKey: "isAdmin",
//     header: "Admin",
//     cell: ({ row }) => {
//       return (
//         <div className=" ">
//           <span>{row.original.isAdmin ? "Yes" : "No"}</span>
//         </div>
//       )
//     },
//   },
]