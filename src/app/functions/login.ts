import {findOneUser} from "../service/users/users.service";
import {userWrong} from '../errors';
import {generateJWT} from "../../lib/utils";

export const login = async (ctx: any) => {
  try {
    const {email, password} = ctx.request.body;

    const user = await findOneUser({
      email,
      password,
      isDeleted: false,
    });

    if (!user) throw userWrong();

    const acToken = await generateJWT({
      userId: user._id,
      email: user.email
    });

    ctx.status = 201;
    ctx.body = {
      access_token: acToken
    };
  } catch (e) {
    ctx.throw(e);
  }
};
