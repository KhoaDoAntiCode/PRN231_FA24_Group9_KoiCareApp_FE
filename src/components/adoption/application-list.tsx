// interface Application {
//     id: string;
//     petName : string;
//     applicationStatus: boolean;
// }

// import axiosClient from "@/lib/axios/axios"
// import { AdoptionFormResponseSchema, AdoptionFormResponseType } from "@/schema/adoption.schema";
// import { useQuery } from "@tanstack/react-query"
// import { Loader } from "../loader/loading";
// import AdoptionForm from "./adoption-form";


// const ApplicationList = () => {
//     const { data: adoptions,isFetching } = useQuery({
//         queryKey: ["adoptions"],
//         queryFn: async () => {
//             const { data } = await axiosClient.get<AdoptionFormResponseType>("/api/Adoption/GetAllAdoptionForms/AdoptionForm");
//             return data.response;
//         }
//     })
//     return (
//         <main>
//             <Loader loading={isFetching}>
//                 <div>
//                     {adoptions !== undefined && 
//                     adoptions?.map((Adopt) => (
//                         <AdoptionForm
//                             applicationDate={ApplicationList.applicationDate}
//                             approvalDate   ={ApplicationList.approvalDate}
//                             adoptionReason ={ApplicationList.adoptionReason}
//                             petExperience  ={ApplicationList.petExperience}
//                             address        = {ApplicationList.address}
//                             contactNumber  ={ApplicationList.contactNumber}
//                             notes          ={ApplicationList.notes}
//                             userEmail      ={ApplicationList.userEmail}
//                             petId          ={ApplicationList.petId}
//                         />
//                     ))}
//                 </div>
//             </Loader>
//         </main>
//     )
// }

