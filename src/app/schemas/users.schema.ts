export const registerByEmail = {
  type: 'object',
  additionalProperties: false,
  required: ['name', 'password', 'email'],
  properties: {
    name: {type: 'string', minLength: 2},
    email: {type: 'string', format: 'email'},
    password: {type: 'string'},
  },
};

export const login = {
  type: 'object',
  required: ['password'],
  additionalProperties: false,
  properties: {
    email: { type: 'string', format: 'email' },
    password: { type: 'string' },
  },
};
