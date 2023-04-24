import { token } from './token';



export default function handler(req, res) {
    let { propertyID } = req.body;

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          authorization: 'Bearer ' + token
        }
      };
      
      fetch('https://open-api.guesty.com/v1/listings/638a965985cf74003f7b34e6', options)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => res.status(200).json({ response }))
        .catch(err => console.error(err));
}