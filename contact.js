import express from "express";

import { add } from "./contact.controller.js";

const router = express.Router();

router.post("/", add);