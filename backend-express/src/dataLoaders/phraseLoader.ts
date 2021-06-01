import DataLoader from 'dataloader';
import { Phrase } from '../models';

// eslint-disable-next-line max-len
const phraseLoader = new DataLoader(async (phraseIds) => Phrase.find({ _id: { $in: phraseIds } }).exec());

export default phraseLoader;
