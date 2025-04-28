import { Types } from 'mongoose';

export interface IThreadControllerCreateThreadOutputSuccess {
  error: false;
  payload: {
    threadId: Types.ObjectId;
  };
}
