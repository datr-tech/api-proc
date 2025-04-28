import { IThreadControllerDeleteThreadOutputError } from './IThreadControllerDeleteThreadOutputError';
import { IThreadControllerDeleteThreadOutputSuccess } from './IThreadControllerDeleteThreadOutputSuccess';

export type IThreadControllerDeleteThreadOutput =
  | IThreadControllerDeleteThreadOutputSuccess
  | IThreadControllerDeleteThreadOutputError;
