import * as z from "zod";

import { CommonSchema } from "@/schema/common.schema";

export const ShelterSchema = z.object({
  id: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
  description: z.string().min(10, "Description is required"),
  limitedCapacity: z.number().min(1, "Limited capacity is required"),
  currentCapacity: z.number().min(1, "Current capacity is required"),
});

export type ShelterType = z.infer<typeof ShelterSchema>;

export const ShelterResponseSchema = CommonSchema.extend({
  data: z.array(ShelterSchema),
});

export type ShelterResponseType = z.infer<typeof ShelterResponseSchema>;