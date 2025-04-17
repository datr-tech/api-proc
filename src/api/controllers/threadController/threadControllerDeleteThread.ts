import { Types } from 'mongoose';
import { ThreadModel } from '@app/api/models';

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
