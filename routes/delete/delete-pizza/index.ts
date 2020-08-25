import Route from "../../route.type";
import PizzaModel from "../../../models/pizza.model";

const deletePizza: Route = async (req, res) => {
  const { pizzaID } = req.body;
  const delPizz = await PizzaModel.findByIdAndDelete(pizzaID);

  if (delPizz)
    res.status(200).json({
      status: "ok",
      msg: "delete succesfull",
      deletedObject: delPizz,
    });
  else
    res.status(404).json({
      status: "error",
      msg: "id not found",
    });
};

export default deletePizza;
