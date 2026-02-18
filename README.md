# Calendly Daemo Agent

A Daemo AI agent that provides scheduling and booking functionality.

## Features

- 🗓️ **Get Availability**: Find available meeting slots with a sales representative
- 📅 **Book Meeting**: Book a meeting at a selected time slot

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example environment file and add your Daemo API key:

```bash
cp .env.example .env
```

Then edit `.env` and set your `DAEMO_AGENT_API_KEY`:

```env
DAEMO_AGENT_API_KEY=your_actual_api_key_here
```

> 💡 **Get your API key** from the [Daemo Dashboard](https://daemo.ai)

### 3. Run the Agent

```bash
npx ts-node src/index.ts
```

You should see:

```
[Daemo SDK] ✓ Registered decorated function: getAvailability
[Daemo SDK] ✓ Registered decorated function: bookMeeting
🚀 Calendly Daemo Agent Online
```

## Project Structure

```
src/
├── index.ts                    # Main entry point
├── services/
│   └── SchedulingService.ts    # Scheduling service with Daemo functions
└── schemas/
    ├── SchedulingSchemas.ts    # TypeScript type definitions
    └── ZodSchemas.ts           # Zod schemas for validation
```

## Development

The project uses:
- **TypeScript** for type safety
- **Daemo Engine** for AI agent functionality
- **Zod** for schema validation
- **reflect-metadata** for decorator support

## Available Functions

### `getAvailability()`

Retrieves available meeting slots for the current week.

**Returns**: Array of time slots with start and end times

### `bookMeeting(input)`

Books a meeting at a specified time slot.

**Input**:
- `slotStartTime`: ISO timestamp of the selected slot
- `name`: Name of the person booking
- `email`: Email of the person booking

**Returns**: Confirmation URL for the booked meeting
