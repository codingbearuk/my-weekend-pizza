import Route from "../../route.type";
import SauceModel from "../../../models/sauce.model";

const getSauces: Route = async (req, res) => {
  const sauces = await SauceModel.find();
  if (sauces) res.status(200).json(sauces);
  else
    res.status(404).json({
      status: "error",
      msg: "there is no souce to show",
    });
};

export default getSauces;
