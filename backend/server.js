import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import newItemsRoutes from "./routes/newItemsRoutes.js";


dotenv.config();
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/" , (req,res) => {
    res.send("Server is running")
})

// Routes

app.use("/api/newItems",newItemsRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Failed to connect to MongoDB:", error);
    });


// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});