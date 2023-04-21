import { token } from './token';

let properties;

let todayte = new Date().toISOString().slice(0, 10);

const today = new Date();
const nextYear = new Date(today.getFullYear() + 2, today.getMonth(), today.getDate()).toISOString().slice(0, 10);

async function fetchData(propertyID) {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        timeout: '20000',
        authorization: 'Bearer ' + token
      }
    };
    
    try {
      const response = await fetch('https://open-api.guesty.com/v1/availability-pricing/api/calendar/listings/'+ propertyID +'?startDate=' + todayte + '&endDate=' + nextYear, options)
      const data = await response.json();  
      properties = data
      console.log(" =======  HERE'S THE RESULT ======");
      console.log(properties);
      
    } catch (error) {
      console.error(error);
    }
}

export default function handler(req, res) {
    let { propertyID } = req.body;
    fetchData(propertyID);
    res.status(200).json({ data: properties})
}


