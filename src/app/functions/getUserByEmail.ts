import {findOneUser} from '../service/users/users.service'
import {notFound} from "../errors";

export const getUserByEmail = async (ctx: any) => {
  try {
    const {email} = ctx.query;

    const user = await findOneUser({email: email, isDeleted: false});

    if (!user) notFound('Account');

    ctx.status = 200;
    ctx.body = {
      id: user._id,
      email: user.email,
      name: user.name,
    };
  } catch (e) {
    ctx.throw(e)
  }
};
