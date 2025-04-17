import express from 'express';
import { apiRouter } from '@app/api/routers';

const { API_NAME } = process.env;
const app = express().use(express.json()).use(`/${API_NAME}`, apiRouter);

export { app };
