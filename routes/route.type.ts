import { Request, Response, Next } from "express";

type Route = (req: Request, res: Response, next?: Next) => void;

export default Route;
