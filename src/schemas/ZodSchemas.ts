import { z } from "zod";

/**
 * Zod schema for a single time slot
 */
export const SlotSchema = z.object({
  startTime: z.string().describe("ISO timestamp for slot start time."),
  endTime: z.string().describe("ISO timestamp for slot end time."),
});

/**
 * Zod schema for availability response
 */
export const AvailabilityResponseSchema = z.object({
  slots: z.array(SlotSchema).describe("Array of available meeting slots."),
});

/**
 * Zod schema for booking input
 */
export const BookingInputSchema = z.object({
  slotStartTime: z.string().describe("ISO timestamp of selected slot."),
  name: z.string().describe("Name of the person booking."),
  email: z.string().email().describe("Email of the person booking."),
});

/**
 * Zod schema for booking result
 */
export const BookingResultSchema = z.object({
  confirmationUrl: z.string().describe("URL to confirmation or calendar invite."),
});
