import Router from 'koa-router';
import {createUser} from './functions/createUser';
import {login} from './functions/login';
import {validator} from "../middlewares/validators";
import {registerByEmail, login as loginSchema} from './schemas/users.schema'
import {checkEmailExisted, checkEmailNotFound} from "../middlewares/authz";

const router = new Router();

router.get('/healthcheck', ctx => {
  ctx.status = 200;
  ctx.response.body = {
    tick: Date.now(),
  };
});

router.get('/api/v1/users', async (ctx) => {
  ctx.body = 'Hello World!';
});

router.post('/api/v1/users/signup',
  validator(registerByEmail, ''),
  checkEmailExisted,
  createUser
);

router.post('/api/v1/users/signin',
  validator(loginSchema, ''),
  checkEmailNotFound,
  login
);

export {router}
