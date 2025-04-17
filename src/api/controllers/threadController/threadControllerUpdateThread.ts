import { ThreadModel } from '@app/api/models';

export const threadControllerUpdateThread = async ({ threadId, payload }) => {
  const res = await ThreadModel.findOneAndUpdate(
    {
      _id: threadId,
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
