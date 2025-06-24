const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn');
const search = document.querySelector('.search');
const closeBtn = document.querySelector('.close-btn');
searchBtn.addEventListener('click', function () {
  console.log(search.classList.contains('active'));
  if (search.classList.contains('active')) {
    searchBox.value = '';
  }
  else {
    search.classList.add('active');
    searchBox.focus();
  }
});

closeBtn.addEventListener('click', function(){
  search.classList.remove('active');
  searchBox.value = '';
  })


  function searchFunction() {
    var textInput = document.getElementById("mySearch").value.trim().toUpperCase();
    console.log("Search input:", textInput);

    var list = document.getElementById("mylist");
    var listItems = list.getElementsByTagName("li");

    if (textInput.length === 0) {
        list.style.display = "none";
        return;
    }

    for (var i = 0; i < listItems.length; i++) {
        var a = listItems[i].getElementsByTagName("a")[0];
        var listItemText = a.textContent.trim().toUpperCase();
        console.log("List item text:", listItemText);

        if (listItemText.includes(textInput)) {
            listItems[i].style.display = "";
        } else {
            listItems[i].style.display = "none";
        }
    }

    list.style.display = "block";
}

function hideSearchList() {
    var list = document.getElementById("mylist");
    list.style.display = "none";
}

document.querySelector(".search-btn").addEventListener("click", function() {
    var searchInput = document.getElementById("mySearch").value.trim();
    if (searchInput.length > 0) {
        searchFunction();
    }
});

document.querySelector(".close-btn").addEventListener("click", hideSearchList);