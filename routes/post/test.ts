import Route from "../route.type";

const test: Route = (req, res) => {
  const { test } = req.body;
  res.status(200).json({
    status: "ok",
    test,
  });
};

export default test;
