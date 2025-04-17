import { Types } from 'mongoose';
import { ProcessModel } from '@app/api/models';

export const processControllerDeleteProcess = async ({ processId }) => {
  const res = await ProcessModel.findOneAndUpdate(
    {
      _id: processId,
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
