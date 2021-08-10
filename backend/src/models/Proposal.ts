import { model } from 'mongoose';
import { Proposal as ProposalSchema } from '../schemas';

export default model('Proposal', ProposalSchema);
