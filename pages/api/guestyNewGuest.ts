// import { token } from './token';

import { token } from "./token";

// async function createGuest(name, lastName, email, phone) {

// //     const options = {
// //         method: 'POST',
// //         headers: {
// //           accept: 'application/json',
// //           'content-type': 'application/json',
// //           authorization: 'Bearer ' + token
// //         },
// //         body: JSON.stringify({
// //             tags: ['friendsAndFamily'],
// //             email: email,
// //             firstName: 'Attempt',
// //             lastName: "lastName"
// //         })
// //       };


    
// //       fetch('https://open-api.guesty.com/v1/guests-crud', options)
// //       .then(response => response.json())
// //       .then(response => console.log(response))
// //       .catch(err => console.error(err));

//     console.log(name);
    
// }




// export default function handler(req, res) {
//     let { name, lastName, email, phone } = req.body;
//     createGuest(name, lastName, email, phone);
//     console.log(name);
    
//     res.status(200).json({ data: name})    
// }




const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Bearer ' + token
    },
    body: JSON.stringify({
      tags: ['friendsAndFamily'],
      email: 'espinosa9mx@gmail.com',
      firstName: 'diego',
      lastName: 'espinosa'
    })
  };
  
  fetch('https://open-api.guesty.com/v1/guests-crud', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

