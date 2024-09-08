var toggleButton = document.getElementById("toggleButton");
var skillsList = document.getElementById("skillsList");
toggleButton.addEventListener("click", function () {
    // Toggle display between 'block' and 'none'
    if (skillsList.style.display === "none") {
        skillsList.style.display = "block";
    }
    else {
        skillsList.style.display = "none";
    }
});
