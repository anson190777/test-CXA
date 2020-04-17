import fs from 'fs';
import path from 'path';
import * as config from '../../config/config';

//read private key rsa
export const jwtPrivateKey = fs.readFileSync(
  path.resolve(config.JWT_KEY_PRIVATE_PATH),
  'utf8',
);

//read public key rsa
export const jwtPublicKey = fs.readFileSync(
  path.resolve(config.JWT_KEY_PUBLIC_PATH),
  'utf8',
);
