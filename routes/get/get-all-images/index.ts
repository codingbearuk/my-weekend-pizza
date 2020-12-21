import Route from '../../route.type';
import fs from 'fs';
import { join } from 'path';

const getAllImages: Route = (req, res) => {
  const pathToPizzaImages: string = join(__dirname, '..', '..', '..', 'public', 'images', 'pizzas');
  const pathToSauceImages: string = join(__dirname, '..', '..', '..', 'public', 'images', 'sauces');
  const pizzas: Array<string> = fs.readdirSync(pathToPizzaImages);
  const sauces: Array<string> = fs.readdirSync(pathToSauceImages);
  res.status(200).json({
    pizzas,
    sauces,
  });
};

export default getAllImages;
