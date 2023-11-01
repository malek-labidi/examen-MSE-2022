import mongoose from "mongoose";

const { Schema, model } = mongoose;

const restaurantSchema = new Schema({
    nom: {
        type: String,
        required: true,
    },
    tel: {
        type: Number,
        required: true,
    },
    adresse: {
        type: String,
        required: true,
    },
});

export default model("Restaurant", restaurantSchema);