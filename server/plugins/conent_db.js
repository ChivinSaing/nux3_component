import mongoose from 'mongoose';

// export default async ()=>{
//   const config = useRuntimeConfig();
//   try {
//     await mongoose.connect(config.dburi);
//     console.log("Connect Success...");
    
//   } catch (error) {
//     console.log(error);
    
//   }
// }

export default async () => {
  try {
      await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log("MongoDB connected!");
  } catch (error) {
      console.error("MongoDB connection error:", error);
  }
};