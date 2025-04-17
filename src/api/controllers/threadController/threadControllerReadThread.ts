import { ThreadModel } from '@app/api/models';

export const threadControllerReadThread = async ({ threadId }) => {
  const thread = await ThreadModel.findById(threadId);

  return thread;
};
