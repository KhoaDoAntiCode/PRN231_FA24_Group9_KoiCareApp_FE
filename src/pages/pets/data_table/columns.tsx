"use client"

import { ColumnDef } from "@tanstack/react-table"

import { PetType } from "@/schema/pet.schema"

export const columns: ColumnDef<PetType>[] = [
  {
    accessorKey: "petName",
    header: "Pet Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "breed",
    header: "Breed",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "description",
    header: "Description",
  },    
]