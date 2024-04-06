// Example data for upcoming events
const upcomingEventsData = [
    { date: "March 25, 2024", time: "10:00 AM", title: "Webinar: Introduction to Consent Education", image: "C:/Users/acer/Desktop/login/images/3.png" },
    { date: "April 5, 2024", time: "2:00 PM", title: "Workshop: Building Healthy Relationships", image: "C:/Users/acer/Desktop/login/images/5.png" },
    { date: "April 21, 2024", time: "11:30 AM", title: "Panel Discussion: Addressing Sexual Assault Prevention", image: "C:/Users/acer/Desktop/login/images/2.png" },
    { date: "April 23, 2024", time: "2:30 AM", title: "Film Screening and Discussion: 'Yes Means Yes'", image: "C:/Users/acer/Desktop/login/images/6.png" },
    { date: "April 28, 2024", time: "3:30 AM", title: "Guest Speaker Series: Empowering Voices", image: "C:/Users/acer/Desktop/login/images/1.png" },
    { date: "June 21, 2024", time: "5:30 AM", title: "Virtual Panel: Navigating Consent in the Digital Age", image: "C:/Users/acer/Desktop/login/images/4.png" }
    
];

// Function to create event posters
function createEventPoster(event) {
    const eventPoster = document.createElement("div");
    eventPoster.classList.add("event-poster");

    const dateElement = document.createElement("p");
    dateElement.textContent = event.date;
    eventPoster.appendChild(dateElement);

    const timeElement = document.createElement("p");
    timeElement.textContent = event.time;
    eventPoster.appendChild(timeElement);

    const titleElement = document.createElement("p");
    titleElement.textContent = event.title;
    eventPoster.appendChild(titleElement);

    const imageElement = document.createElement("img");
    imageElement.src = event.image;
    imageElement.alt = "Event Image";
    eventPoster.appendChild(imageElement);

    const registerButton = document.createElement("button");
    registerButton.textContent = "Register";
    registerButton.addEventListener("click", function() {
        window.location.href = "Register.html"; // Redirect to registration page
    });
    eventPoster.appendChild(registerButton);

    return eventPoster;
}

// Function to render upcoming events
function renderUpcomingEvents() {
    const upcomingEventsContainer = document.getElementById("upcoming-events");
    upcomingEventsData.forEach(event => {
        const eventPoster = createEventPoster(event);
        upcomingEventsContainer.appendChild(eventPoster);
    });
}

// Call renderUpcomingEvents to populate upcoming events
renderUpcomingEvents();

// Example data for workshop images
const workshopImagesData = [
    "C:/Users/acer/Desktop/login/images/000.png",
    "C:/Users/acer/Desktop/login/images/ii.png",
    "C:/Users/acer/Desktop/login/images/000.png",
    "C:/Users/acer/Desktop/login/images/ii.png",
    "C:/Users/acer/Desktop/login/images/000.png",
    "C:/Users/acer/Desktop/login/images/ii.png"
];

// Function to create workshop images
function createWorkshopImages() {
    const workshopImagesContainer = document.querySelector(".workshop-images");
    workshopImagesData.forEach(imageUrl => {
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        imageElement.alt = "Workshop Image";
        imageElement.addEventListener("click", function() {
            window.location.href = "registration-page.html"; // Redirect to registration page
        });
        workshopImagesContainer.appendChild(imageElement);
    });
}

// Call createWorkshopImages to populate workshop images
createWorkshopImages();

// Function to scroll left
function scrollLeft() {
    const container = document.querySelector('.workshop-images');
    container.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

// Function to scroll right
function scrollRight() {
    const container = document.querySelector('.workshop-images');
    container.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
}
