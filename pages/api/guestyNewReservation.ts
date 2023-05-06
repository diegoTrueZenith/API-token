import { token } from './token';


export default function handler(req, res) {  

  const { name, lastName, email, phone, checkIn, checkOut, propertyID } = req.body; 

  if(name && lastName && email && phone && checkIn && checkOut && propertyID ){

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Bearer ' + token
    },
    body: JSON.stringify({
      guest: {firstName: name , lastName, phone: phone, email: email},
      listingId: propertyID,
      checkInDateLocalized: checkIn,
      checkOutDateLocalized: checkOut,
      status: 'confirmed'
    })
  };
  
  fetch('https://open-api.guesty.com/v1/reservations', options)
    .then(response => response.json())
    .then(response => console.log(response.id))
    .catch(err => console.error(err));
  }

  
  res.status(200).json( "done" );




}


