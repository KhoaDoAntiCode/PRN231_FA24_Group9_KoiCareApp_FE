import { useParams } from "react-router-dom";
import axiosClient from "@/lib/axios/axios";
import { PetDetailResponseType, PetDetailType} from "@/schema/pet.schema";
import { useState, useEffect } from "react";
import PetDetailSection from "./pet-detail-section";


export default function PetDetailsPage() {
    const { id } = useParams<{ id: string }>();
    console.log(id);
    const [pet, setPet] = useState<PetDetailType | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchPet = async () => {
        try {
            const { data } = await axiosClient.get<PetDetailResponseType>(`/api/Pet/GetPet/${id}`);
            setPet(data.data); // Assuming data.data is a single pet object
            setIsLoading(false);
        } catch (err: any) {
            setError(err);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPet();
    }, [id]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading pet details</div>;
    if (!pet) return <div>No pet available</div>;

    return (
        
        <div className="my-16 bg-white">
            <div className="mx-auto max-w-7x1">
                <div className="relative items-center px-4 sm:px-6 lg:px-8">
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
                </div>
            </div>
        </div>
        
    );
}
