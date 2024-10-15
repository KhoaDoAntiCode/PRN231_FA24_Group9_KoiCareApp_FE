import * as z from "zod"

export const AdoptionFormSchema = z.object({
    // petId: z.string().min(1, "Pet ID is required"),
    // petName: z.string().min(1, "Pet name is required"),
    applicationDate: z.date(),
    approvalDate: z.date(),
    // adoptionStatus: z.boolean()
    adoptionReason: z.string().min(1, "Adoption reason is required"),
    petExperience: z.string().min(1, "Pet experience is required"),
    address: z.string().min(1, "Address is required"),
    contactNumber: z.string().min(11, "Contact number is required"),
    notes: z.string().min(1, "Notes are required"),
    userEmail: z.string().email("Invalid email address"),
    petId :z.string().min(1, "Pet ID is required"),
  })
  
  export type AdoptionFormType = z.infer<typeof AdoptionFormSchema>

  export const AdoptionFormResponseSchema = z.object({
    message: z.string(),
    success: z.boolean(),
    response: z.array(AdoptionFormSchema),
  })

  export type AdoptionFormResponseType = z.infer<typeof AdoptionFormResponseSchema>