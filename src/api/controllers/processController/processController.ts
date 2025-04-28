import { processControllerCreateProcess } from './processControllerCreateProcess';
import { processControllerDeleteProcess } from './processControllerDeleteProcess';
import { processControllerReadProcess } from './processControllerReadProcess';
import { processControllerUpdateProcess } from './processControllerUpdateProcess';

export const processController = {
  createProcess: processControllerCreateProcess,
  updateProcess: processControllerUpdateProcess,
  readProcess: processControllerReadProcess,
  deleteProcess: processControllerDeleteProcess,
};
