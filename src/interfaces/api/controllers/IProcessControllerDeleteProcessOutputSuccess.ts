import { Types } from 'mongoose';

export interface IProcessControllerDeleteProcessOutputSuccess {
  error: false;
  payload: {
    processId: Types.ObjectId;
  };
}
