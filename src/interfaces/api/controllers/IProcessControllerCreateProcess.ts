import { IProcessControllerCreateProcessInput } from './IProcessControllerCreateProcessInput';
import { IProcessControllerCreateProcessOutput } from './IProcessControllerCreateProcessOutput';

export interface IProcessControllerCreateProcess {
  (
    args: IProcessControllerCreateProcessInput,
  ): Promise<IProcessControllerCreateProcessOutput>;
}
