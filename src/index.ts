import 'dotenv/config';

import { logger } from '@datr.tech/leith-common-logger';
import { db } from '@datr.tech/leith-common-mongodb-connector';
import { procSeeder } from '@datr.tech/leith-common-seeders';

import { app } from '@app-ap2/api';
import { ProcessModel, ThreadModel } from '@app-ap2/api/models';
import { apiName, apiPort, dbHost, dbName, dbPort } from '@app-ap2/config';

app.listen(apiPort, () => {
  logger.info(`api-${apiName} listening on ${apiPort}`);

  (async () => {
    const stat = await db.connect({
      host: dbHost,
      name: dbName,
      port: dbPort,
      user: undefined,
      pass: undefined,
    });

    const { isConnected } = stat;

    if (isConnected) {
      await procSeeder(ProcessModel, ThreadModel);
    }
  })();
});
