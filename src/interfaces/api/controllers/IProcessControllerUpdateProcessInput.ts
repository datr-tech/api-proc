import { Types } from 'mongoose';

export interface IProcessControllerUpdateProcessInput {
  processId: Types.ObjectId;
  payload: {
    frameworkId?: Types.ObjectId;

    journeyId?: Types.ObjectId;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
