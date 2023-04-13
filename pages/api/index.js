export default function handler(req, res) {
    // Handle different HTTP methods
    if (req.method === 'GET') {
      res.status(200).json({ message: 'GET request to /api/example' });
    } else if (req.method === 'POST') {
      res.status(200).json({ message: 'POST request to /api/example' });
    } else {
      res.status(400).json({ message: 'Invalid HTTP method' });
    }
  }
  