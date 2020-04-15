import * as dotenv from 'dotenv'

dotenv.config({path: `${__dirname}/../process.env`});

export const ENV = process.env.ENV;
export const PORT = process.env.PORT;
export const URL_MONGODB = process.env.URL_MONGODB;
export const PRIVATE_KEY = process.env.PRIVATE_KEY;
export const JWT_KEY_PRIVATE_PATH = process.env.JWT_KEY_PRIVATE_PATH;
export const JWT_KEY_PUBLIC_PATH = process.env.JWT_KEY_PUBLIC_PATH;
