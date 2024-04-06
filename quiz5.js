document.addEventListener("DOMContentLoaded", function() {
    const options = document.querySelectorAll(".option");
    const feedback = document.getElementById("feedback");
    const feedbackText = document.getElementById("feedbackText");

    options.forEach(option => {
        option.addEventListener("click", function() {
            const isCorrect = option.getAttribute("data-correct") === "true";
            if (isCorrect) {
                feedbackText.textContent = "Congratulations! That's correct!";
                feedback.style.color = "green";
            } else {
                feedbackText.textContent = "Incorrect. Remember, always respect others' choices.";
                feedback.style.color = "red";
            }
            feedback.style.display = "block";
        });
    });
});

