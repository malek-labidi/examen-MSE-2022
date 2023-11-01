import mongoose from "mongoose";

const { Schema, model } = mongoose;

const platSchema = new Schema({
    restaurantId: {
        type: String,
        required: true,
    },
    menuId: {
        type: String,
        required: true,
    },
});

export default model("Plat", platSchema);