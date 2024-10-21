import * as z from "zod"

export interface AdoptionFormProps {
  adoptionReason: string | null;
  petExperience: string | null;
  address: string | null;
  contactNumber: string | null;
  notes: string | null;
  userEmail: string | null;
  petId: string | null;
}
export const AdoptionFormSchema = z.object({
    // applicationDate:  z.date().nullable(),
    // approvalDate:     z.date().nullable(),
    // adoptionStatus: z.boolean()
    adoptionReason:   z.string().min(1, "Adoption reason is required").nullable(),
    petExperience:    z.string().min(1, "Pet experience is required").nullable(),
    address:          z.string().min(1, "Address is required").nullable().nullable(),
    contactNumber:    z.string().min(10, "Contact number is required").nullable(),
    notes:            z.string().nullable(),
    userEmail:        z.string().email("Invalid email address").nullable(),
    petId :           z.string().uuid("Invalid Pet ID").nullable(),
  })
  
  export type AdoptionFormType = z.infer<typeof AdoptionFormSchema>

  export const AdoptionFormResponseSchema = z.object({
    message: z.string(),
    success: z.boolean(),
    data: z.array(AdoptionFormSchema),
  })

  export type AdoptionFormResponseType = z.infer<typeof AdoptionFormResponseSchema>