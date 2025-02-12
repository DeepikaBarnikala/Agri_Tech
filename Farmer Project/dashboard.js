// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Sample Crop Data (Replace with actual data fetching)
  const crops = [
      { name: "Wheat", quantity: 125, progress: 59 },
      { name: "Rice", quantity: 980, progress: 81 },
      { name: "Corn", quantity: 500, progress: 70 },
      { name: "Soybean", quantity: 200, progress: 45 },
  ];

  // Update Crop Overview
  const cropOverview = document.querySelector('.crop-overview');
  cropOverview.innerHTML = ''; // Clear existing cards
  crops.forEach(crop => {
      const card = document.createElement('div');
      card.className = 'crop-card';
      card.innerHTML = `<h3>${crop.name}</h3><p>${crop.quantity} Tons</p><div class="progress-bar" style="width: ${crop.progress}%;"></div>`;
      cropOverview.appendChild(card);
  });

  // Sample Market Insights (Replace with actual data/API calls)
  document.getElementById('price-prediction').textContent = "Wheat: $250/ton, Rice: $300/ton";
  document.getElementById('buyer-demand').textContent = "High demand for rice and wheat";

  // Crop Management Form Handling
  const cropForm = document.getElementById('crop-form');
  cropForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const cropName = document.getElementById('crop-name').value;
      const cropQuantity = document.getElementById('crop-quantity').value;
      const cropPrice = document.getElementById('crop-price').value;

      // Here you would typically send this data to a server
      // to list the crop for sale.  For this example, we'll
      // just log the data to the console.
      console.log("New Crop Listing:", {
          name: cropName,
          quantity: cropQuantity,
          price: cropPrice
      });

      // Clear the form (optional)
      cropForm.reset();
  });

  // Placeholder content (replace with dynamic data)
  document.getElementById('active-listings').textContent = "No active listings yet.";
  document.getElementById('order-tracking').textContent = "No orders tracked yet.";
  document.getElementById('chatbot').textContent = "Welcome to the AgriCultur Chatbot!";

  // ... (Add more JavaScript for other dynamic features)
}); 

// dashboard.js
document.addEventListener('DOMContentLoaded', () => {
  // ... (Existing JavaScript code) ...

  // Chatbot Functionality
  const chatWindow = document.getElementById('chat-window');
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');

  sendButton.addEventListener('click', sendMessage);

  userInput.addEventListener('keyup', (event) => {
      if (event.key === "Enter") {
          sendMessage();
      }
  });

  function sendMessage() {
      const message = userInput.value.trim();
      if (message === "") return;

      displayMessage(message, 'user');

      // Replace this with your actual chatbot logic or API call.
      // For this example, we'll simulate a bot response.
      setTimeout(() => {
          const botReply = getBotReply(message);
          displayMessage(botReply, 'bot');
      }, 500);

      userInput.value = '';
  }

  function displayMessage(message, sender) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `message ${sender}-message`;
      messageDiv.textContent = message;
      chatWindow.appendChild(messageDiv);
      chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function getBotReply(message) {
      // Replace this with your actual chatbot logic or API call.
      const greetings = ["hi", "hello", "hey"];
      const lowercaseMessage = message.toLowerCase();

      if (greetings.includes(lowercaseMessage)) {
          return "Hi there! How can I help you today?";
      } else if (lowercaseMessage.includes("wheat")) {
          return "Wheat is currently priced at $250 per ton.";
      } else if (lowercaseMessage.includes("rice")) {
          return "Rice is currently priced at $300 per ton.";
      } else {
          return "I'm still learning. Can you rephrase your question?";
      }
  }
});