// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9dIHdrqFpZn7ihCyuLmw5FDIcyfwA4TE",
  authDomain: "subscription-1565c.firebaseapp.com",
  databaseURL: "https://subscription-1565c-default-rtdb.firebaseio.com",
  projectId: "subscription-1565c",
  storageBucket: "subscription-1565c.firebasestorage.app",
  messagingSenderId: "629685085562",
  appId: "1:629685085562:web:cf3b1c76fbaa29506322c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = firebase.database();
const subscriptionsRef = database.ref('subscriptions');

const subscriptionPlans = [
  {
    id: 1,
    name: "Basic",
    price: 9.99,
    features: ["Feature 1", "Feature 2"]
  },
  {
    id: 2,
    name: "Premium",
    price: 19.99,
    features: ["Feature 1", "Feature 2", "Feature 3"]
  },
  {
    id: 3,
    name: "VIP",
    price: 69.99,
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
  }
];
const subscriptionContainer = document.getElementById("subscription-container");
const subscribeBasic = document.getElementById("subscribe-basic");
const subscribeStandard = document.getElementById("subscribe-standard");
const subscribeVIP = document.getElementById("subscribe-vip");

//get plans from firebase
function displaySubscriptionPlans() {
    subscriptionContainer.innerHTML = "";
    subscriptionPlans.forEach(plan => {
        const planDiv = document.createElement("div");
        planDiv.classList.add("subscription-plan");
        planDiv.innerHTML = `
            <h3>${plan.name}</h3>
            <p>Price: $${plan.price.toFixed(2)}</p>
            <ul>
                ${plan.features.map(feature => `<li>${feature}</li>`).join("")}
            </ul>
            <button class="subscribe-button" data-plan-id="${plan.id}">Subscribe</button>
        `;
        subscriptionContainer.appendChild(planDiv);
    })
}
function handleSubscribeClick(event) {
    const planId = event.target.getAttribute("data-plan-id");
    const selectedPlan = subscriptionPlans.find(plan => plan.id == planId);
    if (selectedPlan.classList.contains("subscribed")) {
        return; //prevent subscribing again if already subscribed
    }
}
subscribeBasic.addEventListener("click", event => {
    handleSubscribeClick(event);
    displaySubscriptionPlans(); //refreshes display after subscribing
    showPayment();
})
subscribeStandard.addEventListener("click", event => {
    handleSubscribeClick(event);
    displaySubscriptionPlans();
    showPayment();
})
subscribeVIP.addEventListener("click", event => {
    handleSubscribeClick(event);
    displaySubscriptionPlans(); 
    showPayment();
})
function showPayment() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    closePopup;
    setTimeout(() => {
        const userEmail = localStorage.getItem("email");
        const userPassword = localStorage.getItem("pass").value;
        const emailParams = {
            email: userEmail,
            password: userPassword
        };
        console.log("Confirming confirmation with", emailParams)
        emailjs.send(
            "service_7psalbg",
            "template_l13qvi2"
        )
    })
}