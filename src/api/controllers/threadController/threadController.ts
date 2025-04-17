import { threadControllerCreateThread } from './threadControllerCreateThread';
import { threadControllerUpdateThread } from './threadControllerUpdateThread';
import { threadControllerReadThread } from './threadControllerReadThread';
import { threadControllerDeleteThread } from './threadControllerDeleteThread';

export const threadController = {
  createThread: threadControllerCreateThread,
  updateThread: threadControllerUpdateThread,
  readThread: threadControllerReadThread,
  deleteThread: threadControllerDeleteThread,
};
