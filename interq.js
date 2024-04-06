// quiz8.js
document.addEventListener("DOMContentLoaded", function() {
    const options = document.querySelectorAll(".option button");
    const feedbackPopup = document.getElementById("feedbackPopup");
    const popupText = document.getElementById("popupText");
    const nextModuleButton = document.getElementById("nextModuleButton");
    const closeButton = document.querySelector(".close");

    options.forEach(option => {
        option.addEventListener("click", function() {
            const isCorrect = option.parentElement.getAttribute("data-correct") === "true";
            if (isCorrect) {
                popupText.textContent = "Congratulations! That's correct!";
                feedbackPopup.style.display = "block";
                nextModuleButton.style.display = "block";
            } else {
                popupText.textContent = "Incorrect. Try again.";
                feedbackPopup.style.display = "block";
                nextModuleButton.style.display = "none";
            }
        });
    });

    closeButton.addEventListener("click", function() {
        feedbackPopup.style.display = "none";
    });

    nextModuleButton.addEventListener("click", function() {
        // Logic to navigate to the next module
        // Replace this with actual navigation logic
        alert("Moving to the next module...");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const nextModuleButton = document.getElementById("nextModuleButton");

    nextModuleButton.addEventListener("click", function() {
        // Redirect to the next page
        window.location.href = "next_module_page.html"; // Replace "next_module_page.html" with the URL of your next module page
    });
});
