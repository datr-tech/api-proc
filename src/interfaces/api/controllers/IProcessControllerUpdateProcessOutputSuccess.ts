import { Types } from 'mongoose';

export interface IProcessControllerUpdateProcessOutputSuccess {
  error: false;
  payload: {
    processId: Types.ObjectId;
    responseStatusCode: number;
  };
}
