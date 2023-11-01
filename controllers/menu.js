import menu from "../models/menu.js";
import { validationResult } from 'express-validator';

/**
 * ajout d'un menu
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export function createMenu(req, res) {
    if (!validationResult(req).isEmpty()) {
        return res.status(400).json({ errors: validationResult(req).array() });
    } else {
        menu.create({
            nom: req.body.nom,
            paysOrigine: req.body.paysOrigine,
        }).then((newMenu) => res.status(201).json({ 
            nom: newMenu.nom, 
            paysOrigine: newMenu.paysOrigine }))
            .catch((err) => {
                res.status(500).json({ error: err });
            });
    }
}
/**
 * affichage de tous les menus
 * @param {*} req 
 * @param {*} res 
 */
export function getAll(req, res) {
    menu.find({})
        .then((menus) => {
            res.status(200).json(menus.map((menu) => {
                return {
                    _id: menu._id,
                    nom: menu.nom,
                }
            }));
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}

/**
 * affichage d'un menu a partir de son id
 * @param {*} req 
 * @param {*} res 
 */
export function getOne(req, res) {
    menu.findOne({ "_id": req.params.id })
        .then((menu) => {
            res.status(200).json(menu);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}