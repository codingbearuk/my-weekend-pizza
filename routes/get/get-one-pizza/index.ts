import PizzaModel from "../../../models/pizza.model";
import Route from "../../route.type";

const getOnePizza: Route = async (req, res) => {
  const { pizzaID } = req.params;
  const pizza = await PizzaModel.findById(pizzaID);
  if (pizza) res.status(200).json(pizza);
  else
    res.status(404).json({
      status: "error",
      msg: "pizza not found",
    });
};

export default getOnePizza;
