import { Schema } from 'mongoose';
import MultiligualText from './MultiligualText';

export default new Schema({
  titles: {
    type: [MultiligualText],
    required: true,
    validate: (x: any) => Array.isArray(x) && x.length > 0,
  },
  descriptions: {
    type: [MultiligualText],
  },
  languages: [{
    code: {
      type: String,
      required: true,
    },
  }],
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'category',
  },
}, {
  timestamps: true,
});
