import { IProcessControllerReadProcessInput } from './IProcessControllerReadProcessInput';
import { IProcessControllerReadProcessOutput } from './IProcessControllerReadProcessOutput';

export interface IProcessControllerReadProcess {
  (
    args: IProcessControllerReadProcessInput,
  ): Promise<IProcessControllerReadProcessOutput>;
}
