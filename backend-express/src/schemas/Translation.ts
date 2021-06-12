import { Schema } from 'mongoose';
import Proposal from './Proposal';

export default new Schema({
  languageCode: {
    type: String,
    required: true,
  },
  value: {
    type: String,
  },
  proposals: [Proposal],
  comments: [{
    value: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
    replies: [{
      value: {
        type: String,
      },
      user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user',
      },
    }],
  }],
});
