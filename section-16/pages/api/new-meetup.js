import { MongoClient } from "mongodb";

export const uri = "mongodb+srv://admin:password@cluster0.atk6qip.mongodb.net/meetups?retryWrites=true&w=majority";


const handler = async (req, res) => {
 if( req.method === 'POST') {
  const data = req.body;
  const client = await MongoClient.connect(uri);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const result = await meetupsCollection.insertOne(data)

  client.close();
  res.status(201).json(result)

 }
}
export default handler;
