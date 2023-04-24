import { token } from './token';

let todayte = new Date().toISOString().slice(0, 10);
const today = new Date();
const nextYear = new Date(today.getFullYear() + 2, today.getMonth(), today.getDate()).toISOString().slice(0, 10);

export default function handler(req, res) {  
    let { propertyID } = req.body;
    
    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        timeout: '20000',
        authorization: 'Bearer ' + token
      }
    };

    try {
      console.log("===== FETCHING CALENDAR =====");
      
      fetch('https://open-api.guesty.com/v1/availability-pricing/api/calendar/listings/'+ propertyID +'?startDate=' + todayte + '&endDate=' + nextYear, options)
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(response => res.status(200).json({ response }));
    } catch (error) {
      console.error(error);
    }
}


