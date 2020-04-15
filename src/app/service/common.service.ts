import {MongoHelper} from '../../core/mongo.core'

export const insertOne = (collection: string) => (data: JSON) =>
  MongoHelper.db.collection(collection).insertOne(data);

export const findOneAndUpdate = (collection: string) => (filter: any) => (update: any) => (options: any) =>
  MongoHelper.db.collection(collection).findOneAndUpdate(filter, update, options);

export const findOne = (collection: string) => (filter: any) =>
  MongoHelper.db.collection(collection).findOne(filter);

export const aggregate = (collection: string) => (pipelines: any) =>
  MongoHelper.db.collection(collection).aggregate(pipelines).toArray();

export const count = (collection: string) => (query: any) =>
  MongoHelper.db.collection(collection).countDocuments(query);

export const remove = (collection: string) => (query: any) => (options: any) =>
  MongoHelper.db.collection(collection).remove(query, options);

export const deleteOne = (collection: string) => (filter: any) => (options: any) =>
  MongoHelper.db.collection(collection).deleteOne(filter, options);

