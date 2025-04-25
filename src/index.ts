import { app } from '@app-ap2/api';
import { apiName, apiPort } from '@app-ap2/config';
import { logger } from '@datr.tech/leith-common-logger';
import 'dotenv/config';

app.listen(apiPort, () => {
  logger.info(`${apiName} listening on ${apiPort}`);

  (async () => {
    //await db.connect();
  })();
});
