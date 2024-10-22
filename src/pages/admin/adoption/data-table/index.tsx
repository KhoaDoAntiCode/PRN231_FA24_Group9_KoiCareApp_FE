import axiosClient from "@/config/axios";
import { AdoptionFormResponseType, AdoptionFormType } from "@/schema/adoption.schema";
import React, { useEffect, useState } from "react";


type AdoptionForm = {
    id: string;
    applicationDate: string;
    approvalDate: string;
    adoptionStatus: number;
    adoptionReason: string;
    petExperience: string;
    address: string;
    contactNumber: string;
    notes: string;
    userEmail: string;
    userId: string | null;
    petId: string | null;
  };

const AdoptionList = () => {
    const [data,setData] = React.useState<AdoptionForm[]>([])
    const [page,setPage] = useState(0);
    const [rowPerPage, setRowPerPage] = useState(10);
    const [totalRows, setTotalRows] = useState(0);
    const [loading , setLoading ] = useState(false);
    
async function fetchData(page: number,pageSize: number) {
    setLoading(true);
    try{
        const data = await axiosClient.get<AdoptionFormResponseType>
        (`/api/Adoption/GetAllAdoptionForms/AdoptionForm`)
    }catch(Error){
        console.error("Failed to fetch data",Error);
    }
}
  return (
    <div>
      
    </div>
  )
}

export default AdoptionList
