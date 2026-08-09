const products = [
    {
        name: "Coconut Bread",
        description: "A delicious and soft bread made with a rich coconut flavor.",
        category: "Sweet Bread"
    },
    {
        name: "Family Loaf",
        description: "A large, fresh loaf perfect for sharing with the whole family.",
        category: "Bread"
    },
    {
        name: "Buns and Milk Bread",
        description: "Soft, tasty, and freshly baked for a satisfying snack.",
        category: "Pastry"
    },
    {
        name: "Mini Loaf",
        description: "A convenient smaller loaf for individuals and smaller households.",
        category: "Bread"
    },
    {
        name: "Soft Bite Bread",
        description: "A light and soft bread with a delicious texture.",
        category: "Bread"
    }
];

function displayFeaturedProducts() {
    const featuredContainer = document.querySelector("#featured-products");

    const featuredProducts = products.slice(0, 3);

    featuredProducts.forEach((product) => {
        featuredContainer.innerHTML += `
            <article class="product-card">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>Category:</strong> ${product.category}</p>
            </article>
        `;
    });
}

function setCurrentYear() {
    document.querySelector("#currentyear").textContent =
        new Date().getFullYear();
}

function setLastModified() {
    document.querySelector("#lastModified").textContent =
        `Last Modified: ${document.lastModified}`;
}

function toggleMenu() {
    const navigation = document.querySelector("nav");
    navigation.classList.toggle("open");
}

displayFeaturedProducts();
setCurrentYear();
setLastModified();

document.querySelector("#menu-button").addEventListener("click", toggleMenu);