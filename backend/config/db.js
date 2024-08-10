import mongoose from "mongoose";
import 'dotenv/config'
// export const connectDB = async () => {
//   await mongoose
//     .connect(
//       "mongodb+srv://rudrapratapsingh:ruchi2011@cluster0.splz07z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/project1"
//     )
//     .then(() => {
//       console.log("connected to tomato");
//     });
// };

export const connectDB = async () => {
    await mongoose
      .connect(
        process.env.MONGODB_KEY
      )
      .then(() => {
        console.log("connected to tomato");
      });
  };


