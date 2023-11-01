import express from "express";
import { createMenu, getAll, getOne } from "../controllers/menu.js";
import { body } from "express-validator";

const router = express.Router();

/**
 * declaration des routes menu
 */
router
    .route("/")
    .post(
        body("nom").isLength({ min: 3, max: 30 }),
        body("paysOrigine").isLength({ min: 3, max: 30 }),
        createMenu)
    .get(getAll);

router
    .route("/:id")
    .get(getOne);

/**
 * export du router
 */
export default router;
