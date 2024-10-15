import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosClient from "@/lib/axios/axios";
import { PetDetailResponseType } from "@/schema/pet.schema";
import ErrorPage from "@/pages/error";
import PetDetailSection from "./pet-detail-section";
import { Loader } from "../../loader/loading";

export default function PetDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading, isFetching, isError } = useQuery({
        queryKey: ["pet", id],
        queryFn: async () => {
            const { data } = await axiosClient.get<PetDetailResponseType>(`/api/Pet/GetPet/${id}`);
            return data;
        },
    });

    if (isLoading) {
        return null;
    }

    if (isError || !data || data.response.length === 0) {
        return <ErrorPage />;
    }

    const pet = data.response[0]; 

    return (
        <div className="my-16 bg-white">
            <div className="mx-auto max-w-7x1">
                <div className="relative items-center px-4 sm:px-6 lg:px-8">
                    <Loader loading={isFetching}>
                        <PetDetailSection
                            id={pet.id}
                            petName={pet.petName}
                            age={pet.age}
                            breed={pet.breed}
                            description={pet.description}
                            gender={pet.gender}
                            recuseDate={pet.rescueDate}
                            shelterName={pet.shelterName} 
                            imageSrc={pet.imageSrc}
                        />
                    </Loader>
                </div>
            </div>
        </div>
    );
}
