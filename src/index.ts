import 'dotenv/config';
import { logger } from '@freight/common-logger';
import { db } from '@freight/common-mongodb-connector';
import { app } from '@app/api';

const { API_NAME, API_PORT } = process.env;

app.listen(API_PORT, () => {
  logger.info(`${API_NAME} listening on ${API_PORT}`);

  (async () => {
    await db.connect();
  })();
});
