import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import http from "http";
import next, { NextApiHandler } from "next";
import mongoose from "mongoose";
import fileupload from "express-fileupload";

import getRoutes from "./routes/get";
import postRoutes from "./routes/post";
import deleteRoutes from "./routes/delete";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const server = express();
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

interface Server {
  handle: any;
}

class Server {
  constructor(handle: any) {
    this.handle = handle;
    const servApp = http.createServer(server);
    server.use(express.static("public"));
    server.use(bodyParser.json());
    server.use(
      fileupload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        limits: { fileSize: 50 * 1024 * 1024 },
        abortOnLimit: true,
        responseOnLimit: "File size limit has been reached",
      })
    );
    this.database();
    this.get();
    this.post();
    this.delete();
    servApp.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  }

  get() {
    server.get("/test", getRoutes.test);
    // get pizzas
    server.get("/pizza/:pizzaID", getRoutes.getOnePizza);
    server.get("/pizzas", getRoutes.getPizzas);
    // get sauce
    server.get("/sauce/:sauceID", getRoutes.getOneSauce);
    server.get("/sauces", getRoutes.getSauces);
    // next routes
    server.get("*", this.handle);
  }

  post() {
    server.post("/test", postRoutes.test);
    // login system routes
    server.post("/register", postRoutes.register);
    server.post("/login", postRoutes.login);
    server.post("/authorisation", postRoutes.authorisation);
    // upload routes
    server.post("/upload/pizza", postRoutes.pizzaPhotoUpload);
    server.post("/upload/sauce", postRoutes.saucePhotoUpload);
    // panel routes
    server.post("/panel/add-pizza", postRoutes.addPizza);
    server.post("/panel/add-sauce", postRoutes.addSauce);
  }

  delete() {
    server.delete("/test", deleteRoutes.test);
  }

  database() {
    mongoose
      .connect(process.env.DB_URI, { useNewUrlParser: true })
      .then(() => console.log("connected to database"))
      .catch((err) => console.error(err));
  }
}

app
  .prepare()
  .then(() => {
    new Server(handle);
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
