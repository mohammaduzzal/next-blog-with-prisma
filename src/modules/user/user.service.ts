import { Prisma, User } from "@prisma/client";
import { prisma } from "../../config/db"

const createUser = async (payload: Prisma.UserCreateInput): Promise<User> => {
    const createUsers = await prisma.user.create({
        data: payload
    })

    return createUsers

}

const getAllUsers = async () => {
    const result = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            phone: true,
            picture: true,
            status: true,
            isVerified: true,
            createdAt: true,
            updatedAt: true,
            Post : true
        },
        orderBy : {
            createdAt : "desc"
        }
    })
    console.log(result);
    return result
}

const getUserById = async(id : number) =>{
    const result = await prisma.user.findUnique({
        where : {
            id
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            phone: true,
            picture: true,
            status: true,
            isVerified: true,
            createdAt: true,
            updatedAt: true,
            Post : true
        }
    })
    return result
}

const updateUser = async(id : number, payload :Partial<User>)=>{
    const result = await prisma.user.update({
        where : {
            id
        },
        data : payload
    })
    return result
}


const deleteUser = async(id : number)=>{
    const result = await prisma.user.delete({
        where : {
            id
        }
    })
    return result
}

export const userServices = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}