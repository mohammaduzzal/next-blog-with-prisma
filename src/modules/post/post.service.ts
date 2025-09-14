import { Post, Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createPost = async(payload : Prisma.PostCreateInput) : Promise<Post> =>{
    const result = await prisma.post.create({
        data : payload,
        include :{
            author :{
               select:{
                id : true,
                name : true,
                email : true
               }

            }
        }
    })
    console.log(result);
    return result
}

export const postService = {
    createPost
}