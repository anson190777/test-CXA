import {v4 as uuidv4} from 'uuid';
import {signJwt} from '../lib/jwtHelper'
import * as config from '../../config/config'
import * as keys from '../lib/keys'

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
