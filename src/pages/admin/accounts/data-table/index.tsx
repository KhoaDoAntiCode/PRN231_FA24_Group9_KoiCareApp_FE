import axiosClient from "@/config/axios"
// import { columns } from "./columns"
// import { DataTable } from "./data-table"

import { UserDTOResponseType } from "@/schema/auth.schema"


export default function AccountsDataTable() {
    async function fetchData() {
        try {
            const response = await axiosClient.get<UserDTOResponseType[]>("/api/User/GetAllUsers/userList")
            return response.data;

        } catch (error) {
            console.log(error)
        }
    }
    const data = fetchData()

  return (
      <div>
        <h1 className="text-3x1 font-bold mb-8">User Lists</h1>
        {/* <DataTable
          columns={columns}
          data={data}
        /> */}
    </div>
  )
}