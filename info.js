function showInfographic(topic) {
  // Hide all infographics
  var infographics = document.getElementsByClassName("infographic");
  for (var i = 0; i < infographics.length; i++) {
    infographics[i].style.display = "none";
  }

  // Show the selected infographic
  var selectedInfographic = document.getElementById(topic);
  if (selectedInfographic) {
    selectedInfographic.style.display = "block";
  }
}
