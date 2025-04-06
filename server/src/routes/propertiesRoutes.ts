import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { createProperty, getProperties, getProperty } from "../controllers/propertyControllers";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

const router = express.Router();

router.get("/", getProperty);
router.get("/:id", getProperties);
router.post("/", 
    authMiddleware(["manager"]),
    upload.array("photos"),
    createProperty
);

export default router;