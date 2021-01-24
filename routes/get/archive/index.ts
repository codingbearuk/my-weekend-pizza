import Route from '../../route.type';
import ArchiveModel from '../../../models/order-archive.model';

const getArchive: Route = async (req, res) => {
  const archives = await ArchiveModel.find();
  res.status(200).json(archives);
};

export default getArchive;
