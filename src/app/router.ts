import * as Router from 'koa-router';

const router = new Router();

router.get('/api/v1', ctx => {
  console.log(ctx)
});

export default router;
