import { Router } from 'express';
import { options } from '@freight/common-router-options';
import { processRouterCreateProcess } from './processRouterCreateProcess';
import { processRouterDeleteProcess } from './processRouterDeleteProcess';
import { processRouterReadProcess } from './processRouterReadProcess';
import { processRouterUpdateProcess } from './processRouterUpdateProcess';

export const processRouter = Router(options)
  .use('/', processRouterCreateProcess)
  .use('/:processId', processRouterDeleteProcess)
  .use('/:processId', processRouterReadProcess)
  .use('/:processId', processRouterUpdateProcess);
