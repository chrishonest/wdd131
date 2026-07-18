// Select elements
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

// Toggle hamburger menu
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

// Footer copyright year
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Last modified date
document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;