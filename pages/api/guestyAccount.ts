import { token } from './token';

let properties;

async function fetchData() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        timeout: '10000',
        authorization: 'Bearer ' + token
      }
    };
    
    try {
      const response = await fetch('https://open-api.guesty.com/v1/guests-crud?columns=fullName%20id', options);
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