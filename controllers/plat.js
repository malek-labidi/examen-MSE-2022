import Plat from "../models/plat.js";
/**
 * ajout d'un plat
 * @param {*} req 
 * @param {*} res 
 */
export function createPlat(req, res) {
    //ajout de verification n'est pas obligatoire en cas d'examen mais obligatoire en cas de projet   
    Plat.create({
        restaurantId: req.params.restaurant,
        menuId: req.params.menu,
    }).then((newPlat) => res.status(201).json({
        restaurantId: newPlat.restaurantId,
        menuId: newPlat.menuId,
    }))
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}

/**
 * affichage d'un plat a partir de son restaurantId
 * @param {*} req 
 * @param {*} res 
 */

export function getOne(req, res) {
    Plat.find({ "restaurantId": req.params.restaurant })
        .then((plat) => {
            res.status(200).json(plat);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}

/**
 * suppression d'un plat
 * @param {*} req 
 * @param {*} res 
 */
export function deleteOne(req, res) {
    Plat.findOneAndDelete({ "restaurantId": req.params.restaurant, "menuId": req.params.menu })
        .then((plat) => {
            res.status(200).json(plat);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}