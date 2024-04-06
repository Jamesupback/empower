function navigateTo(resource) {
  // Redirect to the corresponding page based on resource
  window.location.href = resource + ".html";
}
function toggleDescription(resource) {
  var description = document.getElementById(resource + "Description");
  if (description.style.display === "block") {
    description.style.display = "none";
  } else {
    description.style.display = "block";
  }
}
