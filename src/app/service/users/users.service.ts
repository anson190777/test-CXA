import * as commonSvc from '../common.service';

const COLLECTION_USERS = 'users';

//insert user email
export const registerByEmail = (data: any) =>
  commonSvc.insertOne(COLLECTION_USERS)(data);

//find one user by data
export const findOneUser = (data: any) =>
  commonSvc.findOne(COLLECTION_USERS)(data);
