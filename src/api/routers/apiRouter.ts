import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { processRouter } from './processRouter';
import { threadRouter } from './threadRouter';

export const apiRouter = Router(options)
  .use('/api/v1/process', processRouter)
  .use('/api/v1/thread', threadRouter);
