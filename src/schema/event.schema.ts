import * as z from "zod";

// Define enums for eventStatus and eventType
const EventStatusEnum = z.enum(["0", "1", "2"]); // Replace with actual enum values or descriptions if available
const EventTypeEnum = z.enum(["0", "1", "2"]); // Replace with actual enum values or descriptions if available

// Create the Zod schema for BasicEventRequestDTO
export const BasicEventRequestSchema = z.object({
    id: z.string().uuid(), // Assuming id is a UUID, update if it's a different format
    startDate: z.date(), // Use z.date() for date fields
    endDate: z.date(), // Use z.date() for date fields
    eventName: z.string().min(1, "Event name is required"), // Event name as a non-empty string
    description: z.string().optional(), // Description can be optional
    eventStatus: EventStatusEnum, // Use the enum defined above
    eventType: EventTypeEnum, // Use the enum defined above
    location: z.string().min(1, "Location is required"), // Location as a non-empty string
});

// Export the inferred TypeScript type
export type BasicEventRequestType = z.infer<typeof BasicEventRequestSchema>;
