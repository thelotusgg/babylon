import { model } from 'mongoose';
import { Phrase as PhraseSchema } from '../schemas';

export default model('Phrase', PhraseSchema);
