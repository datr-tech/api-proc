import { IProcessControllerDeleteProcessInput } from './IProcessControllerDeleteProcessInput';
import { IProcessControllerDeleteProcessOutput } from './IProcessControllerDeleteProcessOutput';

export interface IProcessControllerDeleteProcess {
  (
    args: IProcessControllerDeleteProcessInput,
  ): Promise<IProcessControllerDeleteProcessOutput>;
}
