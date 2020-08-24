import Route from "../../route.type";
import PizzaModel from "../../../models/pizza.model";

const addPizza: Route = async (req, res) => {
  const { name, ingredients, price, image } = req.body;
  const pizza = new PizzaModel({
    name,
    ingredients,
    price,
    image,
  });
  const savePizza = await pizza.save();
  if (savePizza) {
    res.status(201).json({
      status: "ok",
      msg: "pizza added",
    });
  } else {
    res.status(500).json({
      status: "error",
      msg: "connot save pizza object to database",
    });
  }
};

export default addPizza;
