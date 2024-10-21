import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Row } from "@tanstack/react-table"
import { AxiosError } from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

import { CommonResponseType } from "@/schema/common.schema"
import { ShelterType } from "@/schema/shelters.schema"

import axiosClient from "@/config/axios"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export default function DataTableRowActions({
  row,
}: DataTableRowActionsProps<ShelterType>) {
  const shelters = row.original
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutateAsync: deleteShelter } = useMutation({
    mutationKey: ["deleteWatch", shelters.id],
    mutationFn: async () => {
      const { data } = await axiosClient.delete<CommonResponseType>(
        `api/Shelter/Deleteshelter/${shelters.id}`
      )
      return data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shelter"] })
      toast.success("Shelter deleted successfully")
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message ??
          "An error occurred while deleting shelter."
        toast.error(errorMessage)
      }
    },
  })
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem onClick={() => navigate(`/api/Shelter/UpdateShelter/${shelters.id}`)}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-800 hover:!text-red-800 hover:!bg-red-100"
          onClick={() => deleteShelter()}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}