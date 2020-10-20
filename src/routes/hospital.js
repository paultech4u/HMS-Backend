import express from "express";
import { reg_hospital } from "../controller/hospital/hospital";

const router = express.Router();

router.post("/create-hospital", reg_hospital);

export default router;
