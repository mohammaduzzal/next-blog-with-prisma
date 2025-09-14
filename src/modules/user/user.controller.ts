import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async(req : Request,res:Response) =>{
  try {
    const result = await userServices.createUser(req.body)
  
    res.status(201).json(result)
    
  } catch (error) {
    console.log(error)
     res.status(500).send(error)
  }
}


const getAllUsers = async(req : Request,res:Response) =>{
  try {
    const result = await userServices.getAllUsers()
    console.log(result)
    res.status(200).json(result)
    
  } catch (error) {
    console.log(error)
     res.status(500).json(error)
  }
}


const getUserById = async(req : Request,res:Response) =>{
  try {
    const id = req.params.id
    const result = await userServices.getUserById(Number(id))
    console.log(result)
    res.status(200).json(result)
    
  } catch (error) {
    console.log(error)
     res.status(500).json(error)
  }
}

const updateUser = async(req : Request,res:Response) =>{
  try {
    const id = req.params.id
    const payload = req.body
    const result = await userServices.updateUser(Number(id),payload)
    console.log(result)
    res.status(200).json(result)
    
  } catch (error) {
    console.log(error)
     res.status(500).json(error)
  }
}


const deleteUser = async(req : Request,res:Response) =>{
  try {
    const id = req.params.id
    const result = await userServices.deleteUser(Number(id))
    console.log(result)
    res.status(200).json(result)
    
  } catch (error) {
    console.log(error)
     res.status(500).json(error)
  }
}


export const userController ={
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}