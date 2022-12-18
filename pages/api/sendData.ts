import { UpdateResult } from 'mongodb';
import { NextApiRequest } from 'next/types';
import { sendTopGunners } from '../../utils/db';

const handler = async (req: NextApiRequest): Promise<UpdateResult | undefined> => {
  let result: UpdateResult | undefined;
  if (req.method === 'POST') {
    const data = req.body;

    result = await sendTopGunners(data);
    console.log(`*** send result: ${result} ***`);
  }
  return result;
};

export default handler;
