import Koa from 'koa';
import bodyParser from 'koa-body';
import koaLogger from 'koa-logger';
import koaHelmet from 'koa-helmet';
import createError from 'http-errors';
import cors from '@koa/cors';

export const koaCore = (router: any, console: any) => {
  const app = new Koa();

  app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', ms.toString());
  });

  app.use(cors());

  app.use(
    bodyParser({
      urlencoded: true,
    }),
  );

  app.use(koaHelmet());

  app.use(koaLogger());

  //export log error in handle server
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (e) {
      if (!e.expose) {
        ctx.app.emit('error', e, ctx);
      } else {
        ctx.status = e.statusCode || e.status || 500;
        ctx.body = {
          errors: e.errors,
        };

        ctx.app.emit('error', e, ctx);
      }
    }
  });


  //unsupported media type for different application/json
  app.use(async (ctx, next) => {
    if (
      ctx.request.method !== 'GET' &&
      !/application\/json/.test(ctx.headers['content-type'])
    ) {
      ctx.throw(
        createError(415, 'unsupported media type', {
          errors: [{ code: 415, message: 'unsupported media type' }],
        }),
      );
    } else {
      await next();
    }
  });

  app.use(router.routes());

  // Invalid request when wrong url and unexpected error
  app.use(async (ctx, next) => {
    ctx.throw(
      createError(400, 'INVALID_REQUEST', {
        errors: [{ code: 'INVALID_REQUEST', message: 'Invalid request' }],
      }),
    );

    await next();
  });

  //log in console in error
  app.on('error', (err, ctx) => {
    console.info(err);
    console.log(ctx.request.body);
  });

  return app;
};
