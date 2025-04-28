import { IProcessControllerCreateProcessOutputError } from './IProcessControllerCreateProcessOutputError';
import { IProcessControllerCreateProcessOutputSuccess } from './IProcessControllerCreateProcessOutputSuccess';

export type IProcessControllerCreateProcessOutput =
  | IProcessControllerCreateProcessOutputSuccess
  | IProcessControllerCreateProcessOutputError;
