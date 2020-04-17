import jwt from 'jsonwebtoken';

//generate token by payload and private key
export const signJwt = (payload: any, privateKey: string) =>
  new Promise((resolve, reject) => {
    jwt.sign(
      { ...payload, iss: 'abc123' },
      privateKey,
      { algorithm: 'RS256' },
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      },
    );
  });


//decode token into payload
export const decode = (token: any) => (publicKey: any) => (option: any) =>
  jwt.verify(token, publicKey, option);
