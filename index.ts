import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import http from "http";
import next, { NextApiHandler } from "next";
import mongoose from "mongoose";

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
    server.get("*", this.handle);
  }

  post() {
    server.post("/test", postRoutes.test);
    server.post("/register", postRoutes.register);
    server.post("/login", postRoutes.login);
    server.post("/authorisation", postRoutes.authorisation);
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
