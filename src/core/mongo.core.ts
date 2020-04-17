import * as mongo from 'mongodb';

export class MongoHelper {
  public static client: mongo.MongoClient;
  public static db: mongo.Db;

  constructor() {
    client: null;
    db: null;
  }

  public static connect(url: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (this.db) resolve(this.db);

      mongo.MongoClient.connect(
        url,
        { useNewUrlParser: true },
        (err, client: mongo.MongoClient) => {
          if (err) {
            reject(err);
          } else {
            this.client = client;
            this.db = client.db();
            resolve(client);
          }
        },
      );
    });
  }

  public static disconnect(): void {
    MongoHelper.client.close();
  }
}
