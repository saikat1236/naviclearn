import firebase from 'firebase/app'
import '@firebase/auth'
import 'firebase/firestore'
require('firebase/firestore')
// Firebase Config
const firebaseConfig = {
  apiKey: 'AIzaSyCC7v18RaUB2W-FdxH5nh0NXFzQsv1EnJs',
  authDomain: 'fir-account-ae112.firebaseapp.com',
  databaseURL: 'https://fir-account-ae112.firebaseio.com',
  projectId: 'fir-account-ae112',
  storageBucket: 'fir-account-ae112.appspot.com',
  messagingSenderId: '916219746291',
  appId: '1:916219746291:web:71eb440ec484892e0ea48'
}
// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = null
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app() // if already initialized, use that one
}
export const db = firebase.firestore()
export const auth = firebase.auth()
export default firebase


// const functions = require('firebase-functions');
// const admin = require('firebase-admin');

// const nodemailer = require('nodemailer');

// //Initializing Firebase Admin SDK
// admin.initializeApp();

// //Creating Nodemailer transporter using your Mailtrap SMTP details
// let transporter = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "71b312d8f1a983",
//     pass: "e7a8f2287183dd"
//   }
// });

// //Creating a Firebase Cloud Function
// exports.emailSender = functions.https.onRequest((req, res) => {

//             //Defining mailOptions
//             const mailOptions = {
//             from: 'alfo.opidi85@gmail.com', //Adding sender's email
//             to: req.query.dest, //Getting recipient's email by query string
//             subject: 'Email Sent via Firebase', //Email subject
//             html: '<b>Sending emails with Firebase is easy!</b>' //Email content in HTML
//         };

//         //Returning result
//         return transporter.sendMail(mailOptions, (err, info) => {
//             if(err){
//                 return res.send(err.toString());
//             }
//             return res.send('Email sent succesfully');
//         });

// });