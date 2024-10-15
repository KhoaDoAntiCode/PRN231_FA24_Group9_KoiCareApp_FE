
import axiosClient from "@/lib/axios/axios";

import PetCard from "./PetCard";
import { PetResponseType } from "@/schema/pet.schema";
import { useQuery } from "@tanstack/react-query";



// // const pets: Pet[] = [
// //   {
// //     id: "1",
// //     imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4db27f41f9233796dbb36836073aa78a10ba98790a4460a2402f2c0acc9512a2?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884",
// //     name: "MO231 - Pomeranian White",
// //     gene: "Male",
// //     age: "02 months",
// //     // price: "6.900.000 VND"
// //   },
// //   {
// //     id: "2",
// //     imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a664b512da3902b385e62ce6d152ddcea48f74ca9f2be980300c4f906b429efe?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884",
// //     name: "MO502 - Poodle Tiny Yellow",
// //     gene: "Female",
// //     age: "02 months",
// //     // price: "3.900.000 VND"
// //   },
// //   {
// //     id: "3",
// //     imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e69a752f15183d9cbd4135d84e8d94f4d5769620c4a6ddea470161b058e27e2?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884",
// //     name: "MO102 - Poodle Tiny Sepia",
// //     gene: "Male",
// //     age: "02 months",
// //     // price: "4.000.000 VND"
// //   },
// //   {
// //     id: "4",
// //     imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8fae616652f044572d3a3cf9bcdc5a92843bc4ea4f52e7609be2cbcaa3d1377c?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884",
// //     name: "MO512 - Alaskan Malamute Grey",
// //     gene: "Male",
// //     age: "02 months",
// //     // price: "8.900.000 VND"
// //   },
// //   {
// //     id: "5",
// //     imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a94026745b0b739e89e26dbbe263a1b027a67c613a39440f751faf6a965419a?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884",
// //     name: "MO231 - Pembroke Corgi Cream",
// //     gene: "Male",
// //     age: "02 months",
// //     // price: "7.900.000 VND"
// //   },
// //   {
// //     id: "6",
// //     imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c855cb27c06f7e541c0a13e0c1812e9da69b24a6e87e1164881c0b105521a6f?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884",
// //     name: "MO502 - Pembroke Corgi Tricolor",
// //     gene: "Female",
// //     age: "02 months",
// //     // price: "9.000.000 VND"
// //   },
// //   {
// //     id: "7",
// //     imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed473db519c1c515d5faa9243a888cdf6131197136fbb2d639237499be7cff9a?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884",
// //     name: "MO231 - Pomeranian White",
// //     gene: "Female",
// //     age: "02 months",
// //     // price: "6.500.000 VND"
// //   },
// //   {
// //     id: "8",
// //     imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/17fcb826555e63bc79d5a802200b8556ee491831652eab1474d332e4d35e45cc?placeholderIfAbsent=true&apiKey=6a5f54a1ff4948049825ca6839455884",
// //     name: "MO512 - Poodle Tiny Dairy Cow",
// //     gene: "Male",
// //     age: "02 months",
// //     // price: "5.000.000 VND"
// //   }
  
// // ];

// const PetCardList = () => {
//   const [pets, setPets] = useState([]);
//   async function fetchPets() {
//     const { data } = await axiosClient.get<PetResponseType>("/api/Pet/GetAllPets/Pet");
//     return data.response;
//     // setPets(data.response);
//   }
//   useEffect(() => {
    
//   })
//   return (
//     <section className="mt-7 w-full max-md:max-w-full">
//       <div className="grid grid-cols-4 gap-5 max-md:flex-col ">
//         {pets.map((pet) => (
//           <div className="flex flex-col w-11/12 max-md:ml-0 max-md:w-full">
//             <PetCard
//               // imageSrc    ={pet.imageSrc}
//               id          ={pet.id}
//               petName     ={pet.petName}
//               age         ={pet.age}
//               breed       ={pet.breed}
//               gender      ={pet.gender}
//               description ={pet.description}
//               recusedDate ={pet.recuseDate}
//               shelterId   ={pet.shelterId}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PetCardList;


const PetList = () => {
    const { data: pets,isLoading,error } = useQuery({
        queryKey: ["pet"],
        queryFn: async () => {
            const { data } = await axiosClient.get<PetResponseType>("/api/Pet/GetAllPets");
            console.log(data);
            return data.response;
        },
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading pets</div>;

    return (
        <section className="mt-7 w-full max-md:max-w-full">
            <div className="grid grid-cols-4 gap-5 max-md:flex-col ">
                {pets !== undefined && pets?.map((pet) => (
                    <div className="flex flex-col w-11/12 max-md:ml-0 max-md:w-full">
                        <PetCard
                            // imageSrc    ={pet.imageSrc}
                            id          ={pet.id}
                            petName     ={pet.petName}
                            age         ={pet.age}
                            breed       ={pet.breed}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};  

export default PetList;