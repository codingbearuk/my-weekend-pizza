import Route from '../../route.type';
import MessageModel, { MessageSchema } from '../../../models/message.model';

const messages: Route = async (req,res) => {
    const messages: MessageSchema[] = await MessageModel.find();
    if (messages) {
        res.status(200).json(messages);
    } else {
        res.status(500).json({
            status: 'error'
        })
    }
}

export default messages;