import { IProcessControllerUpdateProcessInput } from './IProcessControllerUpdateProcessInput';
import { IProcessControllerUpdateProcessOutput } from './IProcessControllerUpdateProcessOutput';

export interface IProcessControllerUpdateProcess {
  (
    args: IProcessControllerUpdateProcessInput,
  ): Promise<IProcessControllerUpdateProcessOutput>;
}
