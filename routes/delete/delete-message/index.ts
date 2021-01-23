import Route from '../../route.type';
import MessageModel from '../../../models/message.model';

const deleteMessage: Route = async (req, res) => {
  const id: string = req.body.id;
  try {
    const deleteMessage = await MessageModel.findOneAndDelete({ _id: id });

    if (deleteMessage) {
      const messages = MessageModel.find();
      res.status(200).json({
        status: 'ok',
        messages,
      });
    } else {
      throw new Error('could not to delete');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 'error',
      code: err,
    });
  }
};

export default deleteMessage;
