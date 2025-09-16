import { Router } from "express";
import { postController } from "./post.controller";

const router = Router()

router.get("/stats", postController.getBlogStats)
router.post("/",postController.createPost)
router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPostById);
router.patch("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

export const postRoutes = router