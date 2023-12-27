import { connectDatabase, fetchData, insertDocument } from '../../../helpers/db-utils';

const handler = async (req, res) => {
  const eventId = req.query.eventId;

  let client;
  try{
    client = await connectDatabase();
  }catch(error){
    res.status(500).json({message: "Connecting to the database failed!"});
    return
  }


  if(req.method === 'GET') {
   try{
    const documents = await fetchData(client, 'comments', {eventId})
    res.status(200).json({comments: documents});
   }
   catch(error) {
    res.status(500).json({message: "Fetching data failed!"});
   }
  }

  if(req.method === "POST"){
    const { email, name, text } = req.body;


    if(!email || !email.includes('@') || !name || name.trim() === '' || !text || text.trim() === ''){
      res.status(422).json({message: "Invalid input!"});
      client.close();
      return
    }


    const comment = {
      email,
      name,
      text,
      eventId, 
     };
   
     try {
      const result = await insertDocument(client, 'comments', comment);
      comment._id = result.insertedId;
      res.status(201).json({message: "Comment added!", comment});
     }
     catch(error) {
      res.status(500).json({message: "Inserting data failed!"});
     }
  }

  client.close();
}

export default handler;
