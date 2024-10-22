import axiosClient from "@/config/axios";
import { AdoptionFormResponseType, AdoptionFormType } from "@/schema/adoption.schema";
import { useState, useEffect } from "react";
import AdoptionForm from "./adoption-form";

const ApplicationList = () => {
    const [adoptions, setAdoptions] = useState<AdoptionFormType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchAdoptions = async () => {
        try {
            const { data } = await axiosClient.get<AdoptionFormResponseType[]>(`/api/Adoption/GetAllAdoptionForms/AdoptionForm`);
            console.log(data);
            const adoptionForms = data[0].data;
            setAdoptions(adoptionForms);
            setIsLoading(false);
        } catch (error) {
            setError(error as Error);
            setIsLoading(false);
        }
    };

    
    

    // Fetch the adoption forms when the component is mounted
    useEffect(() => {
        fetchAdoptions();
    }, []);

    return (
        <main>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error loading adoption forms: {error.message}</p>
            ) : (
                <div>
                    {adoptions.length > 0 ? (
                        adoptions.map((adopt) => (
                            <AdoptionForm key={adopt.petId || undefined} />
                        ))
                    ) : (
                        <p>No adoption forms available</p>
                    )}
                </div>
            )}
        </main>
    );
};

export default ApplicationList;
