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
              firstName: 'Diego',
              lastName: 'Espinosa',
              phone: '9999088639',
              email: 'espinosa9mx@gmail.com'
            },
            listingId: '627c1f09c01e3a00346b803b',
            checkInDateLocalized: '2023-05-01',
            checkOutDateLocalized: '2023-05-10',
            status: 'confirmed'
          })
        };
  
        fetch('https://open-api.guesty.com/v1/reservations', options)
        .then(response => response.json())
        .then(response => res.status(200).json({ response}))
        .catch(err => console.error(err));
    }
