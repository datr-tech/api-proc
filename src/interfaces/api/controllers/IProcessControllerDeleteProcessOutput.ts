import { IProcessControllerDeleteProcessOutputError } from './IProcessControllerDeleteProcessOutputError';
import { IProcessControllerDeleteProcessOutputSuccess } from './IProcessControllerDeleteProcessOutputSuccess';

export type IProcessControllerDeleteProcessOutput =
  | IProcessControllerDeleteProcessOutputSuccess
  | IProcessControllerDeleteProcessOutputError;
