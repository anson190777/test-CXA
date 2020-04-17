import createError from 'http-errors';

//check email exist in db
export const emailExist = (email: string) => {
  throw createError(422, 'UnprocessableEntity', {
    errors: [
      {
        code: 11000,
        message: `email ${email} existed`,
      },
    ],
  });
};

//check object not found in db
export const notFound = (object: string) => {
  throw createError(404, 'not found', {
    errors: [
      {
        code: 'NOT_FOUND',
        message: `${object} not found`,
      },
    ],
  });
};

//check login user
export const userWrong = () => {
  throw createError(409, 'INVALID_CREDENTIALS', {
    errors: [
      {
        code: 'INVALID_CREDENTIALS',
        message: 'Wrong email or password',
      },
    ],
  });
};

//check token in user
export const authorization = () => {
  throw createError(403, 'PERMISSION_DENIED', {
    errors: [
      {
        code: 'PERMISSION_DENIED',
        message: 'Permission denied. Please login then try again',
      },
    ],
  });
};
