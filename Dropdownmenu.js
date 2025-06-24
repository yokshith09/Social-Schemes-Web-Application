window.onclick = function(event) {
  // Check if the clicked element is the button to toggle the dropdown
  if (event.target.matches('.dropbtn') || event.target.matches('.info_btn')) {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
  } else {
    // Close the dropdown if the user clicks outside of it
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


 




