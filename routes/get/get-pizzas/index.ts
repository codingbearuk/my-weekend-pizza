import PizzaModel from "../../../models/pizza.model";
import Route from "../../route.type";

const getPizzas: Route = async (req, res) => {
  const pizzas = await PizzaModel.find();
  if (pizzas) res.status(200).json(pizzas);
  else
    res.status(404).json({
      status: "error",
      msg: "pizzas not found",
    });
};

export default getPizzas;
