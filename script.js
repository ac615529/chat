 // Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
  //apiKey: "AIzaSyAzR_l5K7ZHNtTrwfqwvLGQhRxowQtGwEY",
  //authDomain: "ai-defender-de8bd.firebaseapp.com",
  //projectId: "ai-defender-de8bd",
  //storageBucket: "ai-defender-de8bd.appspot.com",
  //messagingSenderId: "320768073851",
 // appId: "1:320768073851:web:b20bc81f618388f6fdc2de",
 // measurementId: "G-10V8XD0L1Z"
//};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);//

function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value;

    if (message.trim() !== "") {
        var messageDiv = document.createElement("div");
        messageDiv.innerText = message;
        document.getElementById("messages").appendChild(messageDiv);
        messageInput.value = "";
    } else {
        alert("Please type a message.");
    }
}
