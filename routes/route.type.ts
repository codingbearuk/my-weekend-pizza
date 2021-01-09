import { Request, Response } from 'express';

type Route = (req: Request, res: Response) => void;

export default Route;
