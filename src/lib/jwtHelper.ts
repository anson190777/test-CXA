import jwt from 'jsonwebtoken'

export const signJwt = (payload: any, privateKey: string) =>
  new Promise((resolve, reject) => {
    jwt.sign(
      {...payload, exp: Date.now(), iss: 'abc123'},
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
