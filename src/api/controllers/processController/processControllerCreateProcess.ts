import { Types } from 'mongoose';
import { ProcessModel } from '@app/api/models';

export const processControllerCreateProcess = async ({ frameworkId, journeyId, adminStatusId, adminUserId }) => {
  const processId = new Types.ObjectId();
  const modelParams = {
    processId,
    frameworkId,
    journeyId,
    adminStatusId,
    adminUserId,
  };

  const processModel = new ProcessModel(modelParams);
  await processModel.save();

  return processModel._id;
};
