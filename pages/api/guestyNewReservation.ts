import { token } from "./token";

    export default function handler(req, res) {
        let { name, lastName, phone, email, propertyID, checkIn, checkOut } = req.body;
        const options = {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer ' + token
          },
          body: JSON.stringify({
            guest: {
              firstName: name,
              lastName: lastName,
              phone: phone,
              email: email
            },
            listingId: propertyID,
            checkInDateLocalized: checkIn,
            checkOutDateLocalized: checkOut,
            status: 'confirmed'
          })
        };
  
        fetch('https://open-api.guesty.com/v1/reservations', options)
        .then(response => response.json())
        .then(response => res.status(200).json({ response}))
        .catch(err => console.error(err));
    }
