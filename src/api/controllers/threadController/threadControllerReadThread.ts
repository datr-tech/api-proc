import { ThreadModel } from '@app-ap2/api/models';

export const threadControllerReadThread = async ({ threadId }) => {
  const thread = await ThreadModel.findById(threadId);

  return thread;
};
