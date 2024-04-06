// JavaScript code for handling button click event
document.addEventListener("DOMContentLoaded", function() {
  const knowMoreButtons = document.querySelectorAll('.know-more-btn');

  knowMoreButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      // Logic for what happens when the "Know more" button is clicked
      event.preventDefault();
      alert("More information about this resource will be displayed here.");
    });
  });

  const searchButton = document.querySelector('button[type="submit"]');
  const searchInput = document.querySelector('input[type="text"]');

  searchButton.addEventListener('click', function(event) {
    // Logic for what happens when the search button is clicked
    event.preventDefault();
    const searchTerm = searchInput.value.trim().toLowerCase();
    // You can implement search functionality here based on the search term
    alert("Search functionality will be implemented in the future.");
  });
});
