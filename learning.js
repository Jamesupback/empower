// Example data for sections with images
const sectionsData = [
  
    { title: "Beginner", ageGroup: "3-5", description: "Introduction to consent through storytelling", image: "https://img.freepik.com/premium-vector/cute-baby-girl-playing-stacking-blocks_185694-1189.jpg?w=740" },
    { title: "Intermediate", ageGroup: "6-9", description: "Understanding boundaries and respectful behavior", image: "https://img.freepik.com/premium-vector/happy-kid-cartoon-character-flat-style-cute-little-child-standing-isolated-white-background_83111-3612.jpg?w=740" },
    { title: "Advanced", ageGroup: "10-13", description: "Exploring complexities of consent in relationships", image: "https://img.freepik.com/premium-vector/thoughtful-introspective-school-boy-character-gazes-into-distance-lost-contemplation-vector-illustration_1016-16563.jpg?w=740" },
    { title: "Beginner", ageGroup: "14-16", description: "Consent in Sexual Relationships", image: "https://img.freepik.com/free-vector/young-people-illustration_52683-34677.jpg?t=st=1711462168~exp=1711465768~hmac=15878cd2704cc4046eebec527ad3a97a7615d4cc29d8aed0722077e2c8969a9c&w=740" },
    { title: "Intermediate", ageGroup: "17-19", description: "Exploring complexities of consent in relationships", image: "https://img.freepik.com/free-vector/active-girl-simple-cartoon-character_1308-104471.jpg?t=st=1711462228~exp=1711465828~hmac=3337a2f3c11af2074eafabc04d691513e4c3d0c34d202c8337465b4434082c79&w=740" },
    { title: "Advanced", ageGroup: "20-22", description: "Consent in the Context of Intoxication and Drugs", image: "https://img.freepik.com/free-vector/man-character-standing-icon_24877-81729.jpg?t=st=1711462536~exp=1711466136~hmac=31e79033ea615129bd33e4fca505cbee79cb30bff07f49faff14a02e8dc8a610&w=740" },
    { title: "Beginner", ageGroup: "23-25", description: "Basics of Consent: What It Means and Why It Matters", image: "https://img.freepik.com/premium-vector/thoughtful-introspective-school-boy-character-gazes-into-distance-lost-contemplation-vector-illustration_1016-16563.jpg?w=740" },
    { title: "Intermediate", ageGroup: "26-29", description: "Consent in Online Interactions and Social Media", image: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60561.jpg?t=st=1711462664~exp=1711466264~hmac=5185b23f5ed9a289fe41c2849cba6bc662a55b75d5292708943fe34b4d37eb48&w=740" },
    { title: "Advanced", ageGroup: "30-45", description: "Consent and Gender Dynamics", image: "https://img.freepik.com/premium-vector/indian-young-character-with-beard-beard-man-young-character-standing-pose-young-father_667157-52.jpg?w=740" }
];

// Function to create section elements
function createSection(section) {
    const sectionElement = document.createElement("div");
    sectionElement.classList.add("section");

    const titleElement = document.createElement("h2");
    titleElement.textContent = section.title;
    sectionElement.appendChild(titleElement);

    const ageGroupElement = document.createElement("p");
    ageGroupElement.textContent = "Age Group: " + section.ageGroup;
    sectionElement.appendChild(ageGroupElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = section.description;
    sectionElement.appendChild(descriptionElement);

    const imageElement = document.createElement("img");
    imageElement.src = section.image;
    imageElement.alt = section.title;
    sectionElement.appendChild(imageElement);

    // Add event listener to handle clicks on sections
    sectionElement.addEventListener("click", function() {
        if (section.title === "Beginner" && section.ageGroup === "3-5") {
            window.location.href = "./quiz5.html"; // Redirect to quiz5.html
        } if (section.title === "Intermediate" && section.ageGroup === "6-9") {
            window.location.href = "./interq.html"; // Redirect to quiz5.html
        } if (section.title === "Advanced" && section.ageGroup === "10-13") {
                window.location.href = "./interq.html"; // Redirect to quiz5.html
            } if (section.title === "Beginner" && section.ageGroup === "14-16") {
                window.location.href = "./teenagerbe.html"; // Redirect to quiz5.html

                 } if (section.title === "Intermediate" && section.ageGroup === "17-19") {
                window.location.href = "./teennagerinte.html"; // Redirect to quiz5.html
            } if (section.title === "Advanced" && section.ageGroup === "20-22") {
                window.location.href = "./teenagerad.html"; // Redirect to quiz5.html
            } if (section.title === "Beginner" && section.ageGroup === "23-25") {
                window.location.href = "./adultbeg.html"; // Redirect to quiz5.html

                 } if (section.title === "Intermediate" && section.ageGroup === "26-29") {
                window.location.href = "./Adint.html"; // Redirect to quiz5.html
            } if (section.title === "Advanced" && section.ageGroup === "30-45") {
                window.location.href = "./Adadv.html"; // Redirect to quiz5.html
        }else {  
            navigateToPage(section.title.toLowerCase()); // Assuming section title can be used as a page identifier
        }
    });

    return sectionElement;
}
// Function to render sections
function renderSections() {
    const sectionsContainer = document.getElementById("sections");
    sectionsData.forEach(section => {
        const sectionElement = createSection(section);
        sectionsContainer.appendChild(sectionElement);
    });
}

// Call renderSections to populate the learning module with sections
renderSections();