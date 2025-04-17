import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { processRouter } from './processRouter';
import { threadRouter } from './threadRouter';

export const apiRouter = Router(options).use('/api/v1/processRouter', processRouter).use('/api/v1/threadRouter', threadRouter);
