import { findOneUser } from '../service/users/users.service';
import { notFound } from '../errors';

export const getUserByEmail = async (ctx: any) => {
  try {
    //get query in request
    const { email } = ctx.query;

    //find user in db
    const user = await findOneUser({ email: email, isDeleted: false });

    //check user in db
    if (!user) notFound('Account');

    //response
    ctx.status = 200;
    ctx.body = {
      id: user._id,
      email: user.email,
      name: user.name,
    };
  } catch (e) {
    ctx.throw(e);
  }
};
