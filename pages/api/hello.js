// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const express = require('express');
const app = express();

// Allow cross-origin requests from any domain
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Your API routes go here
app.get('/api', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
