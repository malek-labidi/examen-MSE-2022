import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import { notFoundError } from "./middlewares/error-handler.js";
import { errorHandler } from "./middlewares/error-handler.js";
import restaurantsRoutes from "./routes/restaurant.js";
import menusRoutes from "./routes/menu.js";
import platsRoutes from "./routes/plat.js";


const app = express();
const PORT = 9090 || process.env.PORT;
const databaseName = 'examen2022';

//affichages de requetes dans la console
mongoose.set('debug', true);

//promise bch ystenales microsevices y5dmou bch yconttecti
mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`)
    .then(() => {
        console.log(`connected to ${databaseName}`);
    })
    .catch((error) => {
        console.log(error);
    });

app.use(cors()); //security
app.use(morgan('dev')); //statut fel terminal 
app.use(express.json()); // bch yjm ya9ra json

app.use('/restaurants', restaurantsRoutes);//bch yjib les routes mt3 restaurant
app.use('/menus', menusRoutes);//bch yjib les routes mt3 menu
app.use('/plats', platsRoutes);//bch yjib les routes mt3 plat

app.use(notFoundError); // bch yjib erreur 404
app.use(errorHandler); // bch yjib erreur 500

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});