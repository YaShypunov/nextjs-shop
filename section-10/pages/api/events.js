import getData from "../../helpers/getData";

const handler = (req, res) => {

  if(req.method === 'GET') {
   const events = getData('events'); 
   res.status(200).json({events});
  }
}

export default handler;
