import { token } from './token';

export default function handler(req, res) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        timeout: '50000',
        authorization: 'Bearer ' + token
      }
    };
    try {
      fetch('https://open-api.guesty.com/v1/reservations?fields=checkIn%20checkOut%20confirmationCode%20guest.fullname%20listing.title&sort=checkIn&limit=100', options)
      .then(response => response.json())
      .then(response => res.status(200).json({ response}))
      // .then(response => console.log(response));
    } catch (error) {
      console.error(error);
    }
}