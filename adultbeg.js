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
        window.location.href = "next_module_page.html"; // Redirect to the next page
    });
});
