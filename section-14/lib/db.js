import { MongoClient } from "mongodb"

export const connectToDatabase = async () => {
  const client = await MongoClient.connect('mongodb+srv://user:passs@cluster0.atk6qip.mongodb.net/auth-demo?retryWrites=true&w=majority')

  return client
}
