import { DaemoSchema } from "daemo-engine";
import "reflect-metadata";

/**
 * Represents a single available time slot
 */
@DaemoSchema({
  description: "An available calendar time slot.",
  properties: {
    startTime: {
      type: "string",
      description: "ISO timestamp for slot start time."
    },
    endTime: {
      type: "string",
      description: "ISO timestamp for slot end time."
    }
  }
})
export class Slot {
  startTime: string = "";
  endTime: string = "";
}

/**
 * Response containing multiple available slots
 */
@DaemoSchema({
  description: "List of available time slots.",
  properties: {
    slots: {
      type: "array",
      description: "Array of available meeting slots.",
      items: {
        type: "object",
        description: "A single slot.",
        properties: {
          startTime: {
            type: "string",
            description: "ISO timestamp for slot start time."
          },
          endTime: {
            type: "string",
            description: "ISO timestamp for slot end time."
          }
        }
      }
    }
  }
})
export class AvailabilityResponse {
  slots: Slot[] = [];
}

/**
 * Input required to book a meeting
 */
@DaemoSchema({
  description: "Information required to book a meeting.",
  properties: {
    slotStartTime: {
      type: "string",
      description: "ISO timestamp of selected slot."
    },
    name: {
      type: "string",
      description: "Name of the person booking."
    },
    email: {
      type: "string",
      description: "Email of the person booking."
    }
  }
})
export class BookingInput {
  slotStartTime: string = "";
  name: string = "";
  email: string = "";
}

/**
 * Booking confirmation result
 */
@DaemoSchema({
  description: "Booking confirmation details.",
  properties: {
    confirmationUrl: {
      type: "string",
      description: "URL to confirmation or calendar invite."
    }
  }
})
export class BookingResult {
  confirmationUrl: string = "";
}
