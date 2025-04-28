import { IProcessControllerUpdateProcessOutputError } from './IProcessControllerUpdateProcessOutputError';
import { IProcessControllerUpdateProcessOutputSuccess } from './IProcessControllerUpdateProcessOutputSuccess';

export type IProcessControllerUpdateProcessOutput =
  | IProcessControllerUpdateProcessOutputSuccess
  | IProcessControllerUpdateProcessOutputError;
