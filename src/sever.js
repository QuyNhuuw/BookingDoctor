import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connetctDB";
import cors from "cors";
//const bodyParser = require("body-parser");
// ...
require("dotenv").config();

let app = express();
app.use(cors({ origin: true }));
//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log("Backend Nodejs is runing on the port : " + port);
});
