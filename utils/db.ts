import { MongoClient, ObjectId } from 'mongodb';
import { IPlayerInfo } from '../types/globalTypes';

const URL = 'mongodb+srv://user_1:user_1@learningcluster.3ozfb.mongodb.net/?retryWrites=true&w=majority';

interface IGunnersSchema {
  _id: ObjectId | string;
  title: string;
  data: IPlayerInfo[];
}

const client = new MongoClient(URL);

export const getTopGunners = async (): Promise<IPlayerInfo[] | undefined> => {
  try {
    const database = client.db('western_shot');
    const tops = database.collection<IGunnersSchema>('tops');
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

export const sendTopGunners = async (data: IPlayerInfo[]): Promise<void> => {
  console.log('++ ', data);

  try {
    const database = client.db('western_shot');
    const tops = database.collection<IGunnersSchema>('tops');
    await tops.updateOne({ title: 'topGunners' }, data);
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  } finally {
    await client.close();
  }
};
