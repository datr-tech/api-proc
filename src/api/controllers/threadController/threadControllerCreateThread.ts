import { ThreadModel } from '@app-ap2/api/models';
import { Types } from 'mongoose';

export const threadControllerCreateThread = async ({
  hopId,
  processId,
  adminStatusId,
  adminUserId,
}) => {
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
