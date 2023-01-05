import { Collection, MongoClient, ObjectId, UpdateResult } from 'mongodb';
import { IPlayerInfo } from '../types/globalTypes';
import process from 'node:process';

// const URL = 'mongodb+srv://user_1:user_1@learningcluster.3ozfb.mongodb.net/?retryWrites=true&w=majority';

interface IGunnersSchema {
  _id: ObjectId | string;
  title: string;
  data: IPlayerInfo[];
}

const client = new MongoClient(process.env.DOMAIN_DB!);

const connectDb = (): Collection<IGunnersSchema> => {
  const database = client.db('western_shot');
  const tops = database.collection<IGunnersSchema>('tops');
  console.log('*** connect to mongoDb ***');

  return tops;
};

export const getTopGunners = async (): Promise<IPlayerInfo[] | undefined> => {
  try {
    const tops = connectDb();
    const gunners = await tops.findOne<IGunnersSchema>({ title: 'topGunners' });
    return gunners?.data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  } finally {
    await client.close();
  }
};

export const sendTopGunners = async (data: IPlayerInfo[]): Promise<UpdateResult | undefined> => {
  try {
    const tops = connectDb();
    const result = await tops.updateOne({ title: 'topGunners' }, { $set: { data } });
    return result;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  } finally {
    await client.close();
  }
};
