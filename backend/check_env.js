import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from backend root
dotenv.config({ path: path.join(__dirname, ".env") });

console.log("Checking Environment Variables...");

const requiredKeys = ["STREAM_API_KEY", "STREAM_API_SECRET", "CLERK_PUBLISHABLE_KEY", "CLERK_SECRET_KEY"];

const missing = [];
const present = [];

requiredKeys.forEach((key) => {
  if (process.env[key]) {
    present.push(key);
  } else {
    missing.push(key);
  }
});

console.log("Present Keys:", present.join(", "));
if (missing.length > 0) {
  console.error("Missing Keys:", missing.join(", "));
  process.exit(1);
} else {
  console.log("All required Stream/Clerk keys are present.");
}
