import { MongoClient } from "mongodb";

export const connectDatabase = async () => {
  const client = await MongoClient.connect("mongodb+srv://admin:HNy4Zo4SdYbb3P2r@cluster0.atk6qip.mongodb.net/events?retryWrites=true&w=majority");

  return client
}

export const insertDocument = async (client, collection, document) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  
  return result
}

export const fetchData = async (client, collection, query) => {
  const db = client.db();
  const result = await db.collection(collection).find(query).sort({_id: -1}).toArray();

  return result;
}
