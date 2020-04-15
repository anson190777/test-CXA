import * as commonSvc from '../common.service'

const COLLECTION_USERS = 'users';

export const registerByEmail = (data: any) => commonSvc.insertOne(COLLECTION_USERS)(data);

export const findOneUser = (data: any) => commonSvc.findOne(COLLECTION_USERS)(data);
