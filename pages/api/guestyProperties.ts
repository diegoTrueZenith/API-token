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
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        timeout: '50000',
        authorization: 'Bearer ' + token
      }
    };
    try {
      let response;
      fetch('https://open-api.guesty.com/v1/listings', options)
      .then(response => response.json())
      .then(response => res.status(200).json({ response}))
    } catch (error) {
      console.error(error);
    }
}