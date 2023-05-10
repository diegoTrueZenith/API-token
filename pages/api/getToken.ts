
import { initializeApp } from "firebase/app";
export const firebaseConfig = {
  apiKey: "AIzaSyBxItFltQlcaFl5OqDlSyQbX1BuEXieVnY",
  authDomain: "betterstay-33577.firebaseapp.com",
  projectId: "betterstay-33577",
  storageBucket: "betterstay-33577.appspot.com",
  messagingSenderId: "132048561469",
  appId: "1:132048561469:web:46b87f20cabbcf61751154"
};
const app = initializeApp(firebaseConfig);
import {doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";

 

export default async function handler(req, res) {  

    const db = getFirestore(app);
    const tokenRef = doc(db, "token", "token");

    const url = 'https://open-api.guesty.com/oauth2/token';
    const requestData = new URLSearchParams({
      grant_type: 'client_credentials',
      scope: 'open-api',
      client_secret: '7qgVJjib4gSV5kJvsvqwRagFSj0RNmKemG4Xk74m',
      client_id: '0oa9ho44n57cpOakU5d7'
    });

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: requestData
    })
    .then(response => response.json())
    .then(response => updateToken(response))
    .then(response => res.status(200).json(response))
    .catch(error => console.log(error))


    async function updateToken(token){
        console.log("=== NEW TOKEN UPDATED  ===");
        await updateDoc(tokenRef, {token: token});
        console.log(token);
    }
}