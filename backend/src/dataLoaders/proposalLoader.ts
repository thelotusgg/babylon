import DataLoader from 'dataloader';
import { Proposal } from '../models';

// eslint-disable-next-line max-len
const proposalLoader = new DataLoader(async (proposalIds) => Proposal.find({ _id: { $in: proposalIds } }).exec());

export default proposalLoader;
