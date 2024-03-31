import mongoose from "mongoose";

export const connectedToDB = async () => {
    try {
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(process.env.MONGODB_URL!);
                // Add other options if needed
        }
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};
