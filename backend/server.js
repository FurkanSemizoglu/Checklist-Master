import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";



dotenv.config();
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());


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