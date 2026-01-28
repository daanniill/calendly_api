import "reflect-metadata";
import { DaemoBuilder, DaemoHostedConnection } from "daemo-engine";
import { SchedulingService } from "./services/SchedulingService";

async function main() {

  const scheduling = new SchedulingService();

  const session = new DaemoBuilder()
    .withServiceName("SchedulingService")
    .registerService(scheduling)
    .build();

  const conn = new DaemoHostedConnection(
    { agentApiKey: process.env.DAEMO_AGENT_API_KEY! },
    session
  );

  await conn.start();
  console.log("🚀 Calendly Daemo Agent Online");
}

main().catch(console.error);
