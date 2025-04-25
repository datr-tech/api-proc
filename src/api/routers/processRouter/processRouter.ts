import { options } from '@datr.tech/leith-config-api-router-options';
import { Router } from 'express';
import { processRouterCreateProcess } from './processRouterCreateProcess';
import { processRouterDeleteProcess } from './processRouterDeleteProcess';
import { processRouterReadProcess } from './processRouterReadProcess';
import { processRouterUpdateProcess } from './processRouterUpdateProcess';

export const processRouter = Router(options)
  .use('/', processRouterCreateProcess)
  .use('/:processId', processRouterDeleteProcess)
  .use('/:processId', processRouterReadProcess)
  .use('/:processId', processRouterUpdateProcess);
