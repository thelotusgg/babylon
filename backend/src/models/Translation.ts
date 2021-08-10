import { model } from 'mongoose';
import { Translation as TranslationSchema } from '../schemas';

export default model('Translation', TranslationSchema);
