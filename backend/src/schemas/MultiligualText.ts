import { Schema } from 'mongoose';

export default new Schema({
  languageCode: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});
