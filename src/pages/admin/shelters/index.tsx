import { useQuery } from "@tanstack/react-query"

import { ShelterResponseType } from "@/schema/shelters.schema"

import axiosClient from "@/config/axios"

import { DataTable } from "@/pages/admin/shelters/data-table/index"
import { columns } from "@/pages/admin/shelters/data-table/columns"
import ErrorPage from "@/pages/error"

import { Loader } from "@/components/loader/loading"

export default function ShelterList() {
  const {
    data: shelters,
    isLoading,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["watches"],
    queryFn: async () => {
      const { data } = await axiosClient.get<ShelterResponseType[]>("/api/Shelter/GetAllShelters")
      return data[0].data
    },
  })

  if (isLoading) return null

  if (!shelters) return <ErrorPage />

  if (isError) return <ErrorPage />

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Shelter List</h1>
      <Loader loading={isFetching}>
        <DataTable columns={columns} data={shelters} />
      </Loader>
    </div>
  )
}