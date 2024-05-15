import express from "express";

import { add } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/", add);

// Exportation du router
export default router;