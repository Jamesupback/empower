document.addEventListener("DOMContentLoaded", function() {
  const feedbackForm = document.getElementById('feedbackForm');
  const feedbackHistory = document.querySelector('.feedback-history');

  feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // You can implement logic to submit feedback to the server here
    const formData = new FormData(feedbackForm);
    const feedbackData = {};
    formData.forEach((value, key) => {
      feedbackData[key] = value;
    });
    
    // Example: Display submitted feedback in feedback history
    const feedbackEntry = document.createElement('div');
    feedbackEntry.classList.add('feedback-entry');
    feedbackEntry.innerHTML = `
      <p><strong>Name:</strong> ${feedbackData.name}</p>
      <p><strong>Email:</strong> ${feedbackData.email}</p>
      <p><strong>Category:</strong> ${feedbackData.category}</p>
      <p><strong>Comments:</strong> ${feedbackData.comments}</p>
    `;
    feedbackHistory.appendChild(feedbackEntry);
    
    // Clear form fields after submission
    feedbackForm.reset();
  });
});
