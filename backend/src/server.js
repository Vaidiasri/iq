import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
const app = express();
const __dirname = path.resolve();

console.log(ENV.PORT);

app.get("/health", (req, res) => {
  res.status(200).json({ mess: "api is up and running" });
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/project/dist")));

  app.get(/.*/, (req, res) => {
    res.sendFile(
      path.join(__dirname, "../frontend/project/dist", "index.html")
    );
  });
}

// bhai industry standard  k  hisbse  hum ek function m database  connection aur server start karege
const protocol = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log(`Server is Running on ${ENV.PORT}`);
    });
  } catch (err) {
    console.log("Error to start  the  server ");
  }
};
protocol();
