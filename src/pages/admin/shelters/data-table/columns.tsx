"use client"

import { ColumnDef } from "@tanstack/react-table"

import { ShelterType } from "@/schema/shelters.schema"

export const columns: ColumnDef<ShelterType>[] = [
  {
    accessorKey: "id",
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
]