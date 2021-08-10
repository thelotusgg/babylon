import { model } from 'mongoose';
import { Category as CategorySchema } from '../schemas';

export default model('Category', CategorySchema);
