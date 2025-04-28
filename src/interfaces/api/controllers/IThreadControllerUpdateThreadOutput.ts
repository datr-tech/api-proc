import { IThreadControllerUpdateThreadOutputError } from './IThreadControllerUpdateThreadOutputError';
import { IThreadControllerUpdateThreadOutputSuccess } from './IThreadControllerUpdateThreadOutputSuccess';

export type IThreadControllerUpdateThreadOutput =
  | IThreadControllerUpdateThreadOutputSuccess
  | IThreadControllerUpdateThreadOutputError;
