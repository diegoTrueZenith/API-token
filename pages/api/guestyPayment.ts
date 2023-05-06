import { token } from './token';


export default function handler(req, res) {  

  const {propertyID, paid } = req.body; 

  if(propertyID && paid ){
  const options = {
    method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer ' + token
      },
      body: JSON.stringify({paymentMethod: {method: 'CASH'}, amount: paid})
    };


  fetch('https://open-api.guesty.com/v1/reservations', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  }

  res.status(200).json( "PAID" );

}