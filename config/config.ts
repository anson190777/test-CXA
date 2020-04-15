import * as dotenv from 'dotenv'

dotenv.config({path: `${__dirname}/../process.env`});

export const ENV = process.env.ENV;
export const PORT = process.env.PORT;
export const URL_MONGODB = process.env.URL_MONGODB;
