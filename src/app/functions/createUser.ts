import { registerByEmail } from '../service/users/users.service';
import { generateId } from '../../lib/utils';

export const createUser = async (ctx: any) => {
  try {
    //get body in request
    const { name, email, password } = ctx.request.body;

    const user = {
      _id: generateId,
      name,
      email,
      password,
      avatarUrl: '',
      isDeleted: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    //insert user in service
    const userInsert = await registerByEmail(user);

    console.log(`${userInsert.ops[0].email} inserted database`);

    //response
    ctx.status = 204;
    ctx.body = undefined;
  } catch (e) {
    throw e;
  }
};
