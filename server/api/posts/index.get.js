// server/api/posts/index.get.js
import postModel from "~/server/model/Post";

export default defineEventHandler(async () => {
    try {
        const result = await postModel.find();//.limit(3)
        console.log(result);
        return result; // Return the result to avoid 500 errors
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
});