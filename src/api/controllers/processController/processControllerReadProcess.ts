import { ProcessModel } from '@app/api/models';

export const processControllerReadProcess = async ({ processId }) => {
  const process = await ProcessModel.findById(processId);

  return process;
};
