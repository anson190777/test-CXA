import http from 'http';
import {koaCore} from './core/koa.core'
import {router} from './app/routes'
import * as config from '../config/config'
import {MongoHelper} from './core/mongo.core'

const startApiServer = () => {
  new Promise((resolve, reject) => {
    http.createServer(koaCore(router, console).callback()).listen(config.PORT, function () {
      return resolve();
    })
  })
};

const start = async () => {
  try {
    await startApiServer();
    console.info(`[MAIN] App is listening on port ${config.PORT}`);

    await MongoHelper.connect(config.URL_MONGODB);
    console.info('[MONGO] connected to: ', config.URL_MONGODB);
  } catch (e) {
    console.error(e);
    process.kill(process.pid, 'SIGTERM');
  }
};

start();

const shutdown = (signal: any) => async (err: any) => {
  console.log(`${signal}...`);
  if (err) console.error(err.stack || err);

  await MongoHelper.disconnect();
  console.info(`${signal} signal received.`);
};

process.on('SIGTERM', shutdown('SIGTERM'));
