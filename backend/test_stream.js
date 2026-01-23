import { StreamClient } from "@stream-io/node-sdk";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Missing keys");
  process.exit(1);
}

const client = new StreamClient(apiKey, apiSecret);

const testUser = {
  id: "test_user_123",
  name: "Test User",
  image: "https://via.placeholder.com/150",
};

async function test() {
  try {
    console.log("Upserting user...");
    await client.upsertUsers([testUser]);
    console.log("User upserted.");

    const callId = `test_call_${Date.now()}`;
    console.log("Creating call:", callId);
    
    // Attempt to create call with the user
    const call = client.video.call("default", callId);
    await call.getOrCreate({
      data: {
        created_by_id: testUser.id,
      },
    });
    console.log("Call created successfully.");

    // Cleanup
    await call.delete();
    console.log("Call deleted.");
    await client.deleteUser(testUser.id);
    console.log("User deleted.");

  } catch (error) {
    console.error("Test Failed:", error.message);
    if (error.response) {
      console.error("Response data:", error.response.data);
    }
  }
}

test();
