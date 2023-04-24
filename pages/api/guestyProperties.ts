import { token } from './token';

let properties;

// async function fetchData() {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         timeout: '50000',
//         authorization: 'Bearer ' + token
//       }
//     };
    
//     try {
//       const response = await fetch('https://open-api.guesty.com/v1/listings', options);
//       const data = await response.json();
//       console.log(data);
//       properties = data
//     } catch (error) {
//       console.error(error);
//     }
// }

export default function handler(req, res) {
    // fetchData();

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        timeout: '50000',
        authorization: 'Bearer ' + token
      }
    };
    
    try {
      fetch('https://open-api.guesty.com/v1/listings', options)
      .then(response => response.json())
      .then(reponse => properties = reponse)
      .then(response => res.status(200).json({ response}));
      // console.log(data);
      // properties = data
      
    } catch (error) {
      console.error(error);
    }

}