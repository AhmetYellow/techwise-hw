import express from "express";
import userRouter from "./router/userRouter.js";
import mongoose from "mongoose";
import cors from "cors";



const PORT = 3000;
const MONGO_URI = "mongodb://localhost:27017/ecommerce";

const app = express();

app.use(express.json());

app.use(cors());
app.use("/users", userRouter);

async function main() {
    try {await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
        console.log("Error connecting to MongoDB");
        process.exit(1); // exit with failure from node.
    }
}

main();

// Root route (optional)
app.get("/", (req, res) => {
    res.send("Welcome to the Mentor Tracker API!");
});

app.listen(3000, () => {
    console.log(`Server is running on port http://127.0.0.1:${PORT}!`);
})