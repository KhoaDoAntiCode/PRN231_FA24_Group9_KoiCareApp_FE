"use client"

import { ColumnDef } from "@tanstack/react-table"

import { UserDTOType } from "@/schema/auth.schema"

export const columns: ColumnDef<UserDTOType>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "emailAddress",
      header: "Email Address",
    },
    {
      accessorKey: "fullName",
      header: "Full Name",
    },
  
    {
      accessorKey: "phoneNumber",
      header: "Phone Number",
    },
    {
      accessorKey: "role",
      header: "Role",
    },
  ]