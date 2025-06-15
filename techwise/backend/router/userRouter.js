import express from "express";
import { createUser, getUsers, getUser, updateUser, deleteUser, loginUser } from "../controller/userController.js"; 



const router = express.Router();
    
// CRUD operations

// Create, Read, Update, Delete

// get all users
router.get("/", getUsers);


router.get("/:id", getUser);

// create a user
router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.post("/login", loginUser);


export default router;