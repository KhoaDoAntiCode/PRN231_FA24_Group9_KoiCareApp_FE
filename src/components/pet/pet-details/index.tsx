import { useParams } from "react-router-dom";
import axiosClient from "@/config/axios";
import { PetDetailResponseType, PetDetailType } from "@/schema/pet.schema";
import { useState, useEffect } from "react";
import PetDetailSection from "./pet-detail-section";

export default function PetDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const [pet, setPet] = useState<PetDetailType | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchPet = async () => {
        try {
            const { data } = await axiosClient.get<PetDetailResponseType>(`/api/Pet/GetPet/${id}`);
            const petData = data.data;
            const imageSrc = petData.petImages ? petData.petImages.map((img) => img.image) : [];
            console.log(imageSrc);
            setPet({
                ...petData,
                // imageSrc,
            })
        } catch (err: any) {
            setError(err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            await Promise.all([fetchPet()]);
            setIsLoading(false);
        };

        fetchData();
    }, [id]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading pet details</div>;
    if (!pet) return <div>No pet available</div>;

    return (
        <div className="mx-5 my-5 bg-white">
            <div className="mx-5 p-5 ">
                <div className="relative items-center px-4 sm:px-6 lg:px-8">
                    <PetDetailSection
                        id={pet.id}
                        petName={pet.petName}
                        age={pet.age}
                        breed={pet.breed}
                        description={pet.description}
                        gender={pet.gender}
                        rescueDate={pet.rescueDate}
                        shelterName={pet.shelterName}
                        petImages={pet.petImages}
                        imageSrc={pet.petImages[0].image}
                    />
                </div>
            </div>
        </div>
    );
}
