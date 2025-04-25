import { apiRouter } from '@app-ap2/api/routers';
import { apiName } from '@app-ap2/config';
import express from 'express';
import expressHealthcheck from 'express-healthcheck';

const app = express()
  .use(express.json())
  .use(`/${apiName}`, apiRouter)
  .use('/healthcheck', expressHealthcheck())
  .use('/static', express.static('public'));

export { app };
