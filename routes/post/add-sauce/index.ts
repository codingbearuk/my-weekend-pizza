import Route from "../../route.type";
import SauceModel from "../../../models/sauce.model";

const addSauce: Route = async (req, res) => {
  const { name, description, price, image } = req.body;
  const sauce = new SauceModel({ name, description, price, image });
  const saveSauce = await sauce.save();

  if (saveSauce)
    res.status(201).json({
      status: "ok",
      msg: "sauce saved succesfully to database",
    });
  else
    res.status(500).json({
      status: "error",
      msg: "saving to database error",
    });
};

export default addSauce;
