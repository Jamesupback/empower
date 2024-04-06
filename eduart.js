// JavaScript for handling "Read more" functionality
document.addEventListener("DOMContentLoaded", function() {
    const readMoreLinks = document.querySelectorAll(".read-more");

    readMoreLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const articleUrl = this.getAttribute("href");
            window.location.href = articleUrl;
        });
    });
});
