import { IThreadControllerCreateThreadOutputError } from './IThreadControllerCreateThreadOutputError';
import { IThreadControllerCreateThreadOutputSuccess } from './IThreadControllerCreateThreadOutputSuccess';

export type IThreadControllerCreateThreadOutput =
  | IThreadControllerCreateThreadOutputSuccess
  | IThreadControllerCreateThreadOutputError;
