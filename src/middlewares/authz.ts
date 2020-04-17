import { findOneUser } from '../app/service/users/users.service';
import { emailExist, notFound, authorization } from '../app/errors';
import { verifyToken } from '../lib/utils';

export const authz = async (ctx: any, next: any) => {
  try {
    if (!ctx.headers.authorization) authorization();

    const token = ctx.headers.authorization.slice(7);

    const user = verifyToken(token);

    if (!user) authorization();

    await next();
  } catch (e) {
    ctx.throw(e);
  }
};

export const checkEmailExisted = async (ctx: any, next: any) => {
  try {
    const userRs = await findOneUser({
      email: ctx.request.body.email,
      isDeleted: false,
    });

    if (userRs) emailExist(ctx.request.body.email);

    await next();
  } catch (e) {
    ctx.throw(e);
  }
};

export const checkEmailNotFound = async (ctx: any, next: any) => {
  try {
    const userRs = await findOneUser({
      email: ctx.request.body.email,
      isDeleted: false,
    });

    if (!userRs) notFound('Account');

    await next();
  } catch (e) {
    ctx.throw(e);
  }
};
