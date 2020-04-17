import { findOneUser } from '../service/users/users.service';
import { userWrong } from '../errors';
import { generateJWT } from '../../lib/utils';

export const login = async (ctx: any) => {
  try {
    //get body in request
    const { email, password } = ctx.request.body;

    const user = await findOneUser({
      email,
      password,
      isDeleted: false,
    });

    //check user in db
    if (!user) throw userWrong();

    //gernate token by user id and email
    const acToken = await generateJWT({
      userId: user._id,
      email: user.email,
    });

    //response
    ctx.status = 200;
    ctx.body = {
      access_token: acToken,
    };
  } catch (e) {
    ctx.throw(e);
  }
};
