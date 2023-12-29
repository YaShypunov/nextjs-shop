import {getSession} from 'next-auth/client';
import { connectToDatabase } from '../../../lib/db';
import { hashPassword, verifyPassword } from '../../../lib/auth';

const handler = async (req, res) => {
  if(req.method !== 'PATCH') {
    return;
  }


  const session = await getSession({req: req});

 
  if(!session) {
    res.status(401).json({message: 'Not authenticated'});
    return;
  }

  const userEmail = session.user.email;
  const { oldPassword, newPassword} = req.body;
  
  const client = await connectToDatabase();
  const userCollection = client.db().collection('users');

  const user = await userCollection.findOne({email: userEmail});

  if(!user){
    res.status(404).json({message: 'User not found'});
    client.close();
    return;
  }

  const isValid = await verifyPassword(oldPassword, user.password);

  if(!isValid){
    res.status(403).json({message: 'Invalid password'});
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(newPassword);

  await userCollection.updateOne({email: userEmail}, {$set: {password: hashedPassword}});

  client.close();
  res.status(200).json({message: 'Password updated'});

}

export default handler;
