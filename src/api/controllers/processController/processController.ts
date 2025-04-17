import { processControllerCreateProcess } from './processControllerCreateProcess';
import { processControllerUpdateProcess } from './processControllerUpdateProcess';
import { processControllerReadProcess } from './processControllerReadProcess';
import { processControllerDeleteProcess } from './processControllerDeleteProcess';

export const processController = {
  createProcess: processControllerCreateProcess,
  updateProcess: processControllerUpdateProcess,
  readProcess: processControllerReadProcess,
  deleteProcess: processControllerDeleteProcess,
};
