import Route from '../../route.type';
import MessageModel, { MessageSchema } from '../../../models/message.model';

const setMessageAsRead: Route = async (req,res) => {
    const id: string = req.body.id;
    const modify = await MessageModel.findOneAndUpdate({_id: id}, {$set: {new: false}});
    const messages = await MessageModel.find();
    if (modify) res.status(200).json({
        status: 'ok',
        messages
    });
    else res.status(500).json({
        status: 'error'
    })
}

export default setMessageAsRead;