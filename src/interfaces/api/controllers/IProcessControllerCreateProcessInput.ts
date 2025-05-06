import { Types } from 'mongoose';

export interface IProcessControllerCreateProcessInput {
  frameworkId: Types.ObjectId;
  journeyId: Types.ObjectId;
  adminStatusId: Types.ObjectId;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
