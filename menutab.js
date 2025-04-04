function openTab(evt, pageName) {
  var i, tabcontent, tablink;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove "active" from all buttons
  tablink = document.getElementsByClassName("tablink");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].classList.remove("active");
  }

  // Show the selected tab and mark the button as active
  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Automatically open the first tab on page load
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tablink").click();
});
