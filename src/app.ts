import * as http from 'http'
// import * as router from './app/router';
// import * as app from './core/koa.core';

function startApiServer() {
  new Promise((resolve, reject) => {
    // let server: http.Server;
    // server = http.createServer(app.default(router, console).callback());

    // server.listen(process.env.PORT, () => {
    //   resolve();
    // })
  })
}

function start() {
  try {
    Promise.all([

      startApiServer(),
    ]);

    console.info(
      `${'[MAIN]'} Server is listening on port ${process.env.PORT}`,
    );
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

start();

const shutdown = (signal: any) => (err: any) => {
  console.log(`${signal}...`);
  if (err) console.error(err.stack || err);

  console.info(`${signal} signal received.`);
  process.exit(1);
};

process.on('SIGTERM', shutdown('SIGNTERM'));
