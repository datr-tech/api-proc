import { Types } from 'mongoose';

export interface IProcessModel {
  processId: Types.ObjectId;
  frameworkId: Types.ObjectId;
  journeyId: Types.ObjectId;
  adminStatusId: Types.ObjectId | undefined;
  adminUserId: Types.ObjectId;
  createdAt?: number;
  updatedAt?: number;
}
