import { MongoHelper } from '../../core/mongo.core';

//insert common in db
export const insertOne = (collection: string) => (data: JSON) =>
  MongoHelper.db.collection(collection).insertOne(data);

//find one and update common in db
export const findOneAndUpdate = (collection: string) => (filter: any) => (
  update: any,
) => (options: any) =>
  MongoHelper.db
    .collection(collection)
    .findOneAndUpdate(filter, update, options);

//find one common in db
export const findOne = (collection: string) => (filter: any) =>
  MongoHelper.db.collection(collection).findOne(filter);

//aggregate common in db
export const aggregate = (collection: string) => (pipelines: any) =>
  MongoHelper.db
    .collection(collection)
    .aggregate(pipelines)
    .toArray();

//count common in db
export const count = (collection: string) => (query: any) =>
  MongoHelper.db.collection(collection).countDocuments(query);

//remove common in db
export const remove = (collection: string) => (query: any) => (options: any) =>
  MongoHelper.db.collection(collection).remove(query, options);

//delete one in db
export const deleteOne = (collection: string) => (filter: any) => (
  options: any,
) => MongoHelper.db.collection(collection).deleteOne(filter, options);
