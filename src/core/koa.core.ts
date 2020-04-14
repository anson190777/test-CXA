"use strict";
import * as Koa from 'koa';
import * as bodyParser from 'koa-body';
import * as Router from 'koa-router';
import * as koaLogger from 'koa-logger';
import * as createError from 'http-errors';
import * as cors from '@koa/cors';

export const koa = (router: any, logger: any) => {
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
      urlencoded: true
    })
  );

  app.use(koaLogger());

  app.use(async (ctx, next) => {
    try {

    } catch (e) {
      if (!e.expose) {
        ctx.status = 500;
        ctx.body = {
          errors: [{
            code: 500,
            message: 'unexpected error'
          }]
        }
      } else {
        ctx.status = e.statusCode || e.status || 500;
        ctx.body = {
          errors: e.errors,
          detail: process.env.env === 'development' ? e : undefined,
        };

        ctx.app.emit('error', e, ctx)
      }
    }
  });

  app.use(async (ctx, next) => {
    if (
      ctx.request.method !== 'GET' &&
      !/application\/json/.test(ctx.headers['content-type'])
    ) {
      ctx.throw(
        createError(415, 'unsupported media type', {
          errors: [{code: 415, message: 'unsupported media type'}],
        })
      );
    } else {
      await next();
    }
  });

  app.use(router.routes());

  app.use(async (ctx, next) => {
    ctx.throw(
      createError(404, 'not found', {
        errors: [{code: 404, message: 'not found'}],
      })
    );
    await next();
  });

  app.on('error', (err, ctx) => {
    console.error(err.message);
    console.log(ctx.request.body);
  });

  return app;
}
