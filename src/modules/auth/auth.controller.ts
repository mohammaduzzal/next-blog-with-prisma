import { Request, Response } from "express";
import { authService } from "./auth.service";

const loginWithEmailPassword = async(req : Request,res:Response) =>{
    try {
        const result = await authService.loginWithEmailPassword(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}


const authWithGoogle = async(req : Request,res:Response) =>{
    try {
        const result = await authService.authWithGoogle(req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).send(error)
    }
}


export const authController = {
    loginWithEmailPassword,
    authWithGoogle
}