import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router()


router.post("/login", authController.loginWithEmailPassword)
router.post("/google", authController.authWithGoogle)

export const authRoutes = router