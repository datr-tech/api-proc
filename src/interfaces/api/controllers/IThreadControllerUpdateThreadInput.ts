import { Types } from 'mongoose';

export interface IThreadControllerUpdateThreadInput {
  threadId: Types.ObjectId;
  payload: {
    hopId?: Types.ObjectId;

    processId?: Types.ObjectId;

    adminStatusId?: Types.ObjectId;

    adminUserId?: Types.ObjectId;

    createdAt?: number;

    updatedAt?: number;
  };
}
