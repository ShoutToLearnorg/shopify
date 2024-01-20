console.log('Hello from your injected script!');

// script.js

// Your existing script logic here

// Add activation logic
document.addEventListener("DOMContentLoaded", function () {
  // Check if activation flag is set in local storage or a cookie
  if (!localStorage.getItem("appActivated")) {
    // Make an AJAX request to your server to notify activation
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost/shopify%20App/activation-endpoint", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ status: "activated" }));

    // Set activation flag in local storage or a cookie to avoid duplicate notifications
    localStorage.setItem("appActivated", "true");
  }
});

