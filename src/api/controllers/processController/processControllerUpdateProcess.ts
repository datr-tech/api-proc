import { ProcessModel } from '@app-ap2/api/models';

export const processControllerUpdateProcess = async ({ processId, payload }) => {
  const res = await ProcessModel.findOneAndUpdate(
    {
      _id: processId,
    },
    payload,
    {
      includeResultMetadata: true,
    },
  );

  let existingDocUpdated;

  if (
    typeof res !== 'undefined' &&
    typeof res.lastErrorObject !== 'undefined' &&
    typeof res.lastErrorObject.updatedExisting !== 'undefined'
  ) {
    existingDocUpdated = res.lastErrorObject.updatedExisting === false;
  }

  return existingDocUpdated;
};
