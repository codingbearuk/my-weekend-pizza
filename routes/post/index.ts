import test from './test';
import register from './register';
import login from './login';
import authorisation from './authorisation';
import pizzaPhotoUpload from './pizza-photo-upload';
import addPizza from './add-pizza';
import saucePhotoUpload from './sauce-photo-upload';
import addSauce from './add-sauce';
import createCheckoutSession from './create-checkout-session';
import finnishOrder from './finnish-order';
import updateUserDetails from './update-user-details';
import createNewMessage from './create-new-message';
import editOrderStatus from './edit-order-status';
import archiveOrder from './archive-order';
import setMessageAsRead from './set-message-as-read'

const index = {
  test,
  register,
  login,
  authorisation,
  pizzaPhotoUpload,
  addPizza,
  saucePhotoUpload,
  addSauce,
  createCheckoutSession,
  finnishOrder,
  updateUserDetails,
  createNewMessage,
  editOrderStatus,
  archiveOrder,
  setMessageAsRead
};

export default index;
