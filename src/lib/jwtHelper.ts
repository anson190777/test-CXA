import jwt from 'jsonwebtoken'

export const signJwt = (payload: any, privateKey: string) =>
  new Promise((resolve, reject) => {
    jwt.sign(
      {...payload, iss: 'abc123'},
      privateKey,
      {algorithm: 'RS256'},
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      }
    )
  });

export const decode = (token: any) => (publicKey: any) => (option: any) => jwt.verify(token, publicKey, option);
