import Cors from 'cors';

export default function handler(req, res) {
    // Initialize the cors middleware
    const cors = Cors({
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    });
  
    // Run the middleware
    cors(req, res, () => {
      // Handle your API request
      res.status(200).json({ num: Math.floor(Math.random() * 100) });
    });
  }
  