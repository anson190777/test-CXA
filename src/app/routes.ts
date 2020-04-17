import Router from 'koa-router';
import { createUser } from './functions/createUser';
import { login } from './functions/login';
import { getUserByEmail } from './functions/getUserByEmail';
import { validator } from '../middlewares/validators';
import {
  registerByEmail,
  login as loginSchema,
  getEmail,
} from './schemas/users.schema';
import {
  authz,
  checkEmailExisted,
  checkEmailNotFound,
} from '../middlewares/authz';

const router = new Router();

//get user by email
router.get(
  '/api/v1/users',
  authz, //check token in url request
  validator(getEmail, 'query'), //check validate email
  getUserByEmail, //handle get user by email
);

//create user by email
router.post(
  '/api/v1/users/signup',
  validator(registerByEmail, ''), //check validate register email
  checkEmailExisted, //check email existed
  createUser, //handle create user by email
);

router.post(
  '/api/v1/users/signin',
  validator(loginSchema, ''), //check validate login
  checkEmailNotFound, //check email not found
  login,  //handle login by email
);

export { router };
