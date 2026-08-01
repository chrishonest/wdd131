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


// Filter temples with area greater than 10000
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // Add more temple objects here...
    // Added Temple 1
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },

    // Added Temple 2
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },

    // Added Temple 3
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017, May, 21",
        area: 44000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
    }
];
const gallery = document.querySelector(".gallery");

function displayTemples(temples) {

    gallery.innerHTML = "";

    temples.forEach((temple) => {

        const card = document.createElement("section");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>

            <img
                src="${temple.imageUrl}"
                alt="${temple.templeName}"
                loading="lazy"
                width="400"
                height="250">
        `;

        gallery.appendChild(card);

    });

}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", (event) => {

    event.preventDefault();

    document.querySelector("#page-title").textContent = "Home";

    displayTemples(temples);

});

document.querySelector("#old").addEventListener("click", (event) => {

    event.preventDefault();

    document.querySelector("#page-title").textContent = "Old Temples";

    const oldTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });

    displayTemples(oldTemples);

});

document.querySelector("#new").addEventListener("click", (event) => {

    event.preventDefault();

    document.querySelector("#page-title").textContent = "New Temples";

    const newTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });

    displayTemples(newTemples);

});

document.querySelector("#large").addEventListener("click", (event) => {

    event.preventDefault();

    document.querySelector("#page-title").textContent = "Large Temples";

    const largeTemples = temples.filter((temple) => temple.area > 90000);

    displayTemples(largeTemples);

});

document.querySelector("#small").addEventListener("click", (event) => {

    event.preventDefault();

    document.querySelector("#page-title").textContent = "Small Temples";

    const smallTemples = temples.filter((temple) => temple.area < 10000);

    displayTemples(smallTemples);

});