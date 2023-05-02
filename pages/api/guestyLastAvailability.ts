import { token } from "./token";

export default function handler(req, res) {
  let { propertyID, checkIn, checkOut} = req.body;

  
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      timeout: "50000",
      authorization: "Bearer " + token,
    },
  };
  try {
    fetch(
      "https://open-api.guesty.com/v1/availability-pricing/api/calendar/listings/" + propertyID + "?startDate=" + checkIn + "&endDate=" + checkOut, options)
      .then((response) => response.json())
      .then((response) => res.status(200).json({ response }));
    // .then(response => console.log(response));
  } catch (error) {
    console.error(error);
  }


}
