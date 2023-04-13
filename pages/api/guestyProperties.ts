let properties;

async function fetchData() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        authorization: 'Bearer eyJraWQiOiJHNzFrRHI0VzZKTTBSREJUam1mU19WMlNhbVl2SkFrUzRqbGVQc2kzaFdrIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmJXZlBJaDE3UEpla3JUM3J6bElKTmdGSDNhR1RUV1JTX2tqcFNOSEE5NnMiLCJpc3MiOiJodHRwczovL2xvZ2luLmd1ZXN0eS5jb20vb2F1dGgyL2F1czFwOHFyaDUzQ2NRVEk5NWQ3IiwiYXVkIjoiaHR0cHM6Ly9vcGVuLWFwaS5ndWVzdHkuY29tIiwiaWF0IjoxNjgxNDI1MjkzLCJleHAiOjE2ODE1MTE2OTMsImNpZCI6IjBvYTk0MTRrYWZZUHIyRjUxNWQ3Iiwic2NwIjpbIm9wZW4tYXBpIl0sInJlcXVlc3RlciI6IkVYVEVSTkFMIiwiYWNjb3VudElkIjoiNjI0MjdlOGU1MDI4ODQwMDMxMDFkZjEwIiwic3ViIjoiMG9hOTQxNGthZllQcjJGNTE1ZDciLCJ1c2VyUm9sZXMiOlt7InJvbGVJZCI6eyJwZXJtaXNzaW9ucyI6WyJhZG1pbiJdfX1dLCJyb2xlIjoidXNlciIsImlhbSI6InYzIiwiYWNjb3VudE5hbWUiOiJCZXR0ZXIgU3RheXMiLCJuYW1lIjoiUmVjdCBBcHAifQ.qNs1ouIlBAf7B2jZzsjLQ147PrDvepTXK8vxs2CuT1IlHafn2SIpSbRnqHVBAaGU17JblU106OzsFr1T_oQL4JcHP0K9ClLX9-xndQbrTFxcmvPMIN1eNK_c4duZ_rLxdY4AWAzbD5Iavc2WtslenMgYw53EK3FaHHjiXOIG14Z6U-xBa1TQRito51SziWsk7uLtTgXR1dGaNr5TDAqITf_xEQkE1DWyc_bsxPFcBK8bCn8dcZYmBGtqJgr3YFgkOWpB_10gxNK1tT6rJ0KAYmOF6hgTO7ltsh5NvL6j5eelRPiEgo6kRer62ZvKidm7ZriqYTEGPzVgRr5xapbfew'
      }
    };
    
    try {
      const response = await fetch('https://open-api.guesty.com/v1/listings', options);
      const data = await response.json();
      console.log(data);
      properties = data
    } catch (error) {
      console.error(error);
    }
}

export default function handler(req, res) {
    fetchData();
    res.status(200).json({ data: properties})
    
}