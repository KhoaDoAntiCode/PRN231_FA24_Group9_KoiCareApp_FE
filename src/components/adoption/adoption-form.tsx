import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { AdoptionFormSchema, AdoptionFormType, AdoptionFormResponseType } from '@/schema/adoption.schema';
import { Input } from '@/components/ui/input'; 
import axiosClient from '@/config/axios';
import { useState,useEffect } from 'react';
import { Button } from '../ui/button';
import { toast } from "sonner";
import { AuthContext, useAuthContext } from '@/context/AuthContext';



const AdoptionForm = () => {
    const { id } = useParams<{ id: string }>(); // Get petId from URL params
    const navigate = useNavigate();  
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { isAuthenticated, login, logout } = useAuthContext();

    const form = useForm<AdoptionFormType>({
        resolver: zodResolver(AdoptionFormSchema),
        defaultValues: {
            petId: id || "", // Pre-fill petId from URL
            adoptionReason: "",
            petExperience: "",
            address: "",
            contactNumber: "",
            notes: "",
            userEmail: "",
        }
    });
    useEffect(() => {
        // Check if the user is authenticated
        if (!isAuthenticated) {
            // If not authenticated, redirect to the login page
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    async function onSubmit(values: AdoptionFormType) {
        setIsSubmitting(true); // Set submitting state to true
        try {
            const { data } = await axiosClient.post<AdoptionFormResponseType>(
                `/api/Adoption/AddAdoptionForm/AddAdoptionForm/${id}`, 
                values
            );
            toast.success("Success", {
                description: data.message,
            });
            form.reset();
            navigate("/"); // Navigate to homepage
        } catch (error) {
            console.error("Error submitting form:", error);
            form.setError("root", { message: "An error occurred while submitting the form, please try again later." });
        } finally {
            setIsSubmitting(false);
        }
    }

    if (!isAuthenticated) {
        toast.message("You should login before fill in the the form");
        return <p>Redirecting to login...</p>;
    }
    return (
        <div className="max-w-lg mx-auto px-10 py-5">
            <h2 className="text-2xl font-bold mb-4 text-center text-orange-400">Adopt a Pet</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit,(e) => console.log(e))} className="space-y-4">
                    <FormField 
                        control={form.control}
                        name="adoptionReason" 
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Adoption Reason</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field} 
                                        type='text'
                                        placeholder="Describe your reason" 
                                        value={field.value || ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField 
                        control={form.control}
                        name="petExperience" 
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pet Experience</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field} 
                                        type='text'
                                        placeholder="Describe your pet experience" 
                                        value={field.value || ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField 
                        control={form.control}
                        name="address" 
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field} 
                                        type='text'
                                        placeholder="Enter your address" 
                                        value={field.value || ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField 
                        control={form.control}
                        name="contactNumber" 
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contact Number</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field} 
                                        type='text'
                                        placeholder="Enter your contact number" 
                                        value={field.value || ""}
                                    />                                
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField 
                        control={form.control}
                        name="notes" 
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Notes</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field} 
                                        type='text'
                                        placeholder="Additional notes (optional)" 
                                        value={field.value || ""}
                                    />                                
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField 
                        control={form.control}
                        name="userEmail" 
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                        type='text' 
                                        placeholder="Enter your email address" 
                                        value={field.value || ""}
                                    />                                
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Hidden input for petId */}
                    <input type="hidden" {...form.register("petId")} />

                    <Button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}

export default AdoptionForm;
