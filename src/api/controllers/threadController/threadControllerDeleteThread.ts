import { ThreadModel } from '@app-ap2/api/models';
import { Types } from 'mongoose';

export const threadControllerDeleteThread = async ({ threadId }) => {
  const res = await ThreadModel.findOneAndUpdate(
    {
      _id: threadId,
    },
    {
      adminStatusId: new Types.ObjectId(),
    },
    {
      includeResultMetadata: true,
    },
  );

  return res;
};
