import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
const app = initializeApp(firebaseConfig);
import {doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";


export default async function handler(req, res) {

  const db = getFirestore(app);
  const tokenRef = doc(db, "token", "token");
  const docSnap = await getDoc(tokenRef);
  let token;
  if (docSnap.exists()) {
      token = docSnap.data().token;
  } else {
    console.log("TOKEN NOT FOUND IN FIREBASE");
  }

  let todayte = new Date().toISOString().slice(0, 10);
  const today = new Date();
  const nextYear = new Date(today.getFullYear() + 2, today.getMonth(), today.getDate()).toISOString().slice(0, 10);

    let { propertyID } = req.body;
    
    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        timeout: '20000',
        authorization: 'Bearer ' + token
      }
    };

    try {
      console.log("===== FETCHING CALENDAR =====");
      
      fetch('https://open-api.guesty.com/v1/availability-pricing/api/calendar/listings/'+ propertyID +'?startDate=' + todayte + '&endDate=' + nextYear, options)
      .then(response => response.json())
      .then(response => res.status(200).json({ response }));
    } catch (error) {
      console.error(error);
    }
}


