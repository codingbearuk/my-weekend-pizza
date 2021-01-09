import Route from '../../route.type';
import MessageModel from '../../../models/message.model';

interface BodyType extends Body {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const createNewMessage: Route = async function (req, res) {
  const { name, email, subject, message }: BodyType = req.body;
  const newMessage = new MessageModel({ name, email, subject, message, new: true });
  try {
    await newMessage.save();
    res.status(200).json({
      status: 'ok',
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
    });
    throw new Error('database saving problem');
  }
};

export default createNewMessage;
