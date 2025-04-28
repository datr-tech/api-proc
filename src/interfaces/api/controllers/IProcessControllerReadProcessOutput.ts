import { IProcessControllerReadProcessOutputError } from './IProcessControllerReadProcessOutputError';
import { IProcessControllerReadProcessOutputSuccess } from './IProcessControllerReadProcessOutputSuccess';

export type IProcessControllerReadProcessOutput =
  | IProcessControllerReadProcessOutputSuccess
  | IProcessControllerReadProcessOutputError;
