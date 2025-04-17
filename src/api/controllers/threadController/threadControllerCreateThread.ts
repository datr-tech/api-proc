import { Types } from 'mongoose';
import { ThreadModel } from '@app/api/models';

export const threadControllerCreateThread = async ({ hopId, processId, adminStatusId, adminUserId }) => {
  const threadId = new Types.ObjectId();
  const modelParams = {
    threadId,
    hopId,
    processId,
    adminStatusId,
    adminUserId,
  };

  const threadModel = new ThreadModel(modelParams);
  await threadModel.save();

  return threadModel._id;
};
