import DataLoader from 'dataloader';
import { Translation } from '../models';

// eslint-disable-next-line max-len
const translationLoader = new DataLoader(async (translationIds) => Translation.find({ _id: { $in: translationIds } }).exec());

export default translationLoader;
