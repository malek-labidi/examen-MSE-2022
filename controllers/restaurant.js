import Restaurant from '../models/restaurant.js';
import { validationResult } from 'express-validator';

/**
 * ajout d'un restaurant
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export function createRestaurant(req, res) {
    if (!validationResult(req).isEmpty()) {
        return res.status(400).json({ errors: validationResult(req).array() });
    } else {
        Restaurant.create({
            nom: req.body.nom,
            tel: req.body.tel,
            adresse: req.body.adresse
        }).then((newRestaurant) => res.status(201).json({ 
            nom: newRestaurant.nom, 
            tel: newRestaurant.tel, 
            adresse: newRestaurant.adresse }))
            .catch((err) => {
                res.status(500).json({ error: err });
            });
    }
}

/**
 * affichage de tous les restaurants
 * @param {*} req 
 * @param {*} res 
 */
export function getAll(req, res) {
    Restaurant.find({})
        .then((restaurants) => {
            res.status(200).json(restaurants.map((restaurant) => {
                return {
                    _id: restaurant._id,
                    nom: restaurant.nom,
                    
                }
            }));
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}

/**
 * affichage d'un restaurant a partir de son id
 * @param {*} req 
 * @param {*} res 
 */
export function getOne(req, res) {
    Restaurant.findOne({ "_id": req.params.id })
        .then((restaurant) => {
            res.status(200).json(restaurant);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}