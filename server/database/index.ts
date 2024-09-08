import mongoose from "mongoose";

export const connectToDatabase = async () => {
  const { MONGO_URI } = useRuntimeConfig();

  if (!MONGO_URI)
    throw new Error("MONGO_URI environment variable is not defined.");

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connection established successfully.");
  } catch (error) {
    if (error instanceof Error)
      console.error("Error connecting to MongoDB:", error.message);
    else console.error("An unknown error occurred");
    process.exit(1);
  }
};
