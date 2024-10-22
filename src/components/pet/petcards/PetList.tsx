import axiosClient from "@/config/axios";
import PetCard from "./PetCard";
import {  PetResponseType, PetType } from "@/schema/pet.schema";
import { useState, useEffect } from "react";
import CarouselDemo from "@/components/carousel";

const PetList = () => {
    const [pets, setPets] = useState<PetType[]>([]); // Ensure pets is initialized as an array
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchPets = async () => {
        try {
            const { data } = await axiosClient.get<PetResponseType>("/api/Pet/GetAllPets");
                
                setPets(data.data); 
                
                setIsLoading(false);
        } catch (err: any) {
            setError(err);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPets();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading pets</div>;

    return (
        <section className="overflow-hidden pt-1 pl-4 rounded-none bg-white max-md:pl-5">
            <CarouselDemo />
            <h2 className="text-2xl font-bold text-center py-10">List Of Adoption </h2>    
            <div className="grid grid-cols-4 gap-5 max-md:flex-col">
                {pets !== undefined ? (
                    pets.map((pet) => (
                        <div key={pet.id} className="flex flex-col w-11/12 max-md:ml-0 max-md:w-full">
                            <PetCard
                                id={pet.id}
                                petName={pet.petName}
                                age={pet.age}
                                breed={pet.breed}
                                imageSrc={pet.petImages && pet.petImages.length > 0 ? pet.petImages[0].image : ""}
                                />
                        </div>
                    ))
                ) : (
                    <div>No pets available</div>
                )}
            </div>
        </section>
    );
};

export default PetList;
