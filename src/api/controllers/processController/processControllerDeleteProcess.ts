import { ProcessModel } from '@app-ap2/api/models';
import { Types } from 'mongoose';

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
