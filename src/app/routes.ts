import Router from 'koa-router';
// import send from 'koa-send';

const router = new Router();

router.get('/*', async (ctx) => {
  ctx.body = 'Hello World!';
});

export {router}
