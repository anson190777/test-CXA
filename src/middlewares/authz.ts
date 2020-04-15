import {findOneUser} from "../app/service/users/users.service";
import {
  emailExist,
  notFound,
} from "../app/errors";

export const checkEmailExisted = async (ctx: any, next: any) => {
  try {
    const userRs = await findOneUser({
      email: ctx.request.body.email,
      isDeleted: false
    });

    if (userRs) emailExist(ctx.request.body.email);

    await next();
  } catch (e) {
    ctx.throw(e)
  }
};

export const checkEmailNotFound = async (ctx: any, next: any) => {
  try {
    const userRs = await findOneUser({
      email: ctx.request.body.email,
      isDeleted: false
    });

    if (!userRs) notFound('Account');

    await next();
  } catch (e) {
    ctx.throw(e)
  }
};
