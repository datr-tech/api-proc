import { Router } from 'express';
import { options } from '@datr.tech/leith-config-api-router-options';
import { processRouter } from './processRouter';
import { threadRouter } from './threadRouter';

export const apiRouter = Router(options).use('/api/v1/processRouter', processRouter).use('/api/v1/threadRouter', threadRouter);
