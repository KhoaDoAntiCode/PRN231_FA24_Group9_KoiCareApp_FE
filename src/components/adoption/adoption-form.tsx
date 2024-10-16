import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { AdoptionFormSchema, AdoptionFormType, AdoptionFormResponseType } from '@/schema/adoption.schema';
import { Input } from '@/components/ui/input'; 
import axiosClient from '@/lib/axios/axios';

import { useState } from 'react';

// type Props = {
//     applicationDate: Date;
//     approvalDate: Date;
//     adoptionReason: string;
//     petExperience: string;
//     address: string;
//     contactNumber: string;
//     notes: string;
//     userEmail: string;
//     petId: string;
// }

// {applicationDate,
// approvalDate,
// adoptionReason,
// petExperience,
// address,
// contactNumber,
// notes,
// userEmail,
// petId
// }: Props
const AdoptionForm = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<AdoptionFormType>({
        resolver: zodResolver(AdoptionFormSchema),
        defaultValues: {
            adoptionReason: "",
            petExperience: "",
            address: "",
            contactNumber: "",
            notes: "",
            userEmail: "",
        }
    });

    const onSubmit = async (values: AdoptionFormType) => {
        setIsSubmitting(true);
        try {
            const { data } = await axiosClient.post<AdoptionFormResponseType>("/api/Adoption/AddAdoptionForm/AddAdoptionForm", values)
            navigate('/petlist');
            return data.data;
        } catch (error) {
            console.error("Error submitting form:", error);
            form.setError("root", { message: "Có lỗi xảy ra khi gửi biểu mẫu, vui lòng thử lại sau." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold">Adopt a pet</h2>
            {isSubmitting? (
                <p className="text-green-500">Your application has been submitted!</p>
            ) : (
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField 
                        control={form.control}
                        name="adoptionReason" 
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Adoption Reason</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Enter your reason for adoption" />
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
                                    <Input {...field} placeholder="Describe your pet experience" />
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
                                    <Input {...field} placeholder="Enter your address" />
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
                                    <Input {...field} placeholder="Enter your contact number" />
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
                                    <Input {...field} placeholder="Any additional notes" />
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
                                <FormLabel>User Email</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Enter your email" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
                        Submit
                    </button>
                </form>
            </Form>
      )}
        </div>
    );
}

export default AdoptionForm;
