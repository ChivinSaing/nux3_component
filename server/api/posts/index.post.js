import connectToDB from "~/server/plugins/conent_db"; // MongoDB connection utility
import postModel from "~/server/model/Post"; // Import the Product model

export default defineEventHandler(async (event) => {
  try {
    await connectToDB(); // Connect to MongoDB
    const body = await readBody(event); // Get the data from the form submit

    // Create a new product instance
    const newpostModel = new postModel({
      name : body.name,
      price: body.price,
      qty  : body.qty,
      // total: body.total
    
    });

    // Save the new product to the database
    const result = await newpostModel.save();

    return{ 
      success: true,
      message: "Product successfully added!",
      data: result,
    };
  } catch (error) {
    console.error("Error adding product:", error);
    return {
      success: false,
      message: "Failed to add product.",
    };
  }
});
