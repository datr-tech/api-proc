import { threadControllerCreateThread } from './threadControllerCreateThread';
import { threadControllerDeleteThread } from './threadControllerDeleteThread';
import { threadControllerReadThread } from './threadControllerReadThread';
import { threadControllerUpdateThread } from './threadControllerUpdateThread';

export const threadController = {
  createThread: threadControllerCreateThread,
  updateThread: threadControllerUpdateThread,
  readThread: threadControllerReadThread,
  deleteThread: threadControllerDeleteThread,
};
