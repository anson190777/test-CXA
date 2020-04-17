import { v4 as uuidv4 } from 'uuid';
import { signJwt, decode } from './jwtHelper';
import * as keys from '../lib/keys';

//generate id identification
export const generateId = uuidv4();

//generate token
export const generateJWT = (data: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const result = signJwt(data, keys.jwtPrivateKey);

      return resolve(result);
    } catch (e) {
      return reject(e);
    }
  });

//generate token into payload
export const verifyToken = (token: string) =>
  decode(token)(keys.jwtPublicKey)({ algorithms: ['RS256'] });
