import UserModel from '../../../models/user.model';
import Route from '../../route.type';
import { detailsToUpdateType } from './update-user-details.types';

const updateUserDetails: Route = async (req, res) => {
  const detailsToUpdate: detailsToUpdateType = {};
  if (req.body.address) detailsToUpdate.adress = req.body.address;
  if (req.body.city) detailsToUpdate.city = req.body.city;
  if (req.body.postcode) detailsToUpdate.postcode = req.body.postcode;
  if (req.body.phone) detailsToUpdate.phone = req.body.phone;

  const updatedUser = await UserModel.findByIdAndUpdate(req.body.id, {
    $set: detailsToUpdate,
  });
  if (updatedUser) res.status(200).json({ status: 'ok' });
  else res.status(500).json({ status: 'error' });
};

export default updateUserDetails;
