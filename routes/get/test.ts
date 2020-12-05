import Route from '../route.type';

const test: Route = (req, res) => {
  res.status(200).json({
    status: 'test ok',
  });
};

export default test;
