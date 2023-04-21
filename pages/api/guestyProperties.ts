import { token } from './token';

let properties;

async function fetchData() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        timeout: '50000',
        authorization: 'Bearer ' + token
      }
    };
    
    try {
      const response = await fetch('https://open-api.guesty.com/v1/listings', options);
      const data = await response.json();
      console.log(data);
      properties = data
    } catch (error) {
      console.error(error);
    }
}

export default function handler(req, res) {
    fetchData();
    res.status(200).json({ data: properties})
}