import { token } from "./token";

let data;

function makeReservation(name,lastName, phone, email, propertyID, checkIn, checkOut){
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

    console.log("=======================");
    
      console.log("Name: " + name);
      console.log("Last Name: " + lastName);
      console.log("Phone: "  + phone);
      console.log("Email: " + email);
      console.log("PropertyID: " + propertyID);
      console.log("CheckIn: " + checkIn);
      console.log("CheckOut: " + checkOut);
      
      
    fetch('https://open-api.guesty.com/v1/reservations', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .then(response => data = response)
      .catch(err => console.error(err));
    
}

    export default function handler(req, res) {
        let { name, lastName, phone, email, propertyID, checkIn, checkOut } = req.body;
        makeReservation(name,lastName, phone, email, propertyID, checkIn, checkOut);
        res.status(200).json({ data: data})
    }

    
 