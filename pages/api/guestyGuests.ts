import { token } from './token';

let guests;

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
      const response = await fetch('https://open-api.guesty.com/v1/guests-crud?columns=guestEmail%20id&skip=0', options)
      const data = await response.json();
      guests = data
    } catch (error) {
      console.error(error);
    }
}

export default function handler(req, res) {
    fetchData();
    res.status(200).json({ data: guests})    
}