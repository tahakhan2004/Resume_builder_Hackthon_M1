const toggleButton = document.getElementById("toggleButton") as HTMLElement;
const skillsList = document.getElementById("skillsList") as HTMLElement;

toggleButton.addEventListener("click", () => {
  // Toggle display between 'block' and 'none'
  if (skillsList.style.display === "none") {
    skillsList.style.display = "block";
  } else {
    skillsList.style.display = "none";
  }
});
