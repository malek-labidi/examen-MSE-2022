import express from "express";
import { createPlat,getOne,deleteOne } from "../controllers/plat.js";

const router = express.Router();

/**
 * declaration des routes plat
 */

router
    .route("/:restaurant/:menu")
    .post(createPlat)
    .delete(deleteOne);

router
    .route("/:restaurant")
    .get(getOne);

/**
 * export du router
 */
export default router;

