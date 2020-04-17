import { v4 as uuidv4 } from 'uuid';
import { signJwt, decode } from './jwtHelper';
import * as keys from '../lib/keys';

export const generateId = uuidv4();

export const generateJWT = (data: any) =>
  new Promise(async (resolve, reject) => {
    try {
      const result = signJwt(data, keys.jwtPrivateKey);

      return resolve(result);
    } catch (e) {
      return reject(e);
    }
  });

export const verifyToken = (token: string) =>
  decode(token)(keys.jwtPublicKey)({ algorithms: ['RS256'] });
