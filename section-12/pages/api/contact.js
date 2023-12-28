import { MongoClient } from "mongodb";

const connectDatabase = async () => {
  const client = await  MongoClient.connect(`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.atk6qip.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`);

  return client

}

const handler = async (req, res) => {
  if(req.method === 'POST') {
    const {name, email, message} = req.body;

    if(!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
      res.status(422).json({message: 'Invalid input.'});
      return;
    }

    // Store it in a database

    const newMessage = {
      email, name, message
    }

  let client;

   try {
    client = await connectDatabase();
   } catch(error) {
    res.status(500).json({message: 'Could not connect to database.'});
    return
   }

   try {
     const db = client.db();
     const result = await db.collection('messages').insertOne(newMessage);
     newMessage.id = result.insertedId;
   } catch(error) {
    client.close();
    res.status(500).json({message: 'Storing message failed!'})
    return;
   }


   client.close();
    res.status(201).json({message: newMessage});

  }
}

export default handler;
