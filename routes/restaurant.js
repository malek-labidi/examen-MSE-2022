import express from "express";
import { body } from "express-validator";
import { createRestaurant,getAll,getOne } from "../controllers/restaurant.js";

const router = express.Router();

/**
 * declaration des routes restaurant
 */
router
    .route("/")
    .post(
        body("nom").isLength({ min: 3, max: 30 }),
        body("adresse").isLength({ min: 3, max: 30 }),
        body("tel").isLength({ min: 8, max: 8 }).isNumeric(),
        createRestaurant)
    .get(getAll);

router
    .route("/:id")
    .get(getOne);
    
/**
 * export du router
 */
export default router;