import { IThreadControllerReadThreadOutputError } from './IThreadControllerReadThreadOutputError';
import { IThreadControllerReadThreadOutputSuccess } from './IThreadControllerReadThreadOutputSuccess';

export type IThreadControllerReadThreadOutput =
  | IThreadControllerReadThreadOutputSuccess
  | IThreadControllerReadThreadOutputError;
