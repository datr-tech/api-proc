import { Router } from 'express';
import { options } from '@datr.tech/leith-config-api-router-options';
import { threadRouterCreateThread } from './threadRouterCreateThread';
import { threadRouterDeleteThread } from './threadRouterDeleteThread';
import { threadRouterReadThread } from './threadRouterReadThread';
import { threadRouterUpdateThread } from './threadRouterUpdateThread';

export const threadRouter = Router(options)
  .use('/', threadRouterCreateThread)
  .use('/:threadId', threadRouterDeleteThread)
  .use('/:threadId', threadRouterReadThread)
  .use('/:threadId', threadRouterUpdateThread);
