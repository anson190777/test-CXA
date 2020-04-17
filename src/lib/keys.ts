import fs from 'fs';
import path from 'path';
import * as config from '../../config/config';

const keys = {
  jwtPrivateKey: '',
  jwtPublicKey: '',
};

export const jwtPrivateKey = fs.readFileSync(
  path.resolve(config.JWT_KEY_PRIVATE_PATH),
  'utf8',
);

export const jwtPublicKey = fs.readFileSync(
  path.resolve(config.JWT_KEY_PUBLIC_PATH),
  'utf8',
);
