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

    if (featuredContainer) {
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
}

function displayProducts(productList = products) {
    const productContainer = document.querySelector("#products-container");

    if (!productContainer) {
        return;
    }

    productContainer.innerHTML = "";

    if (productList.length === 0) {
        productContainer.innerHTML = `
            <p>No products were found in this category.</p>
        `;
        return;
    }

    productList.forEach((product) => {
        productContainer.innerHTML += `
            <article class="product-card">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>Category:</strong> ${product.category}</p>
            </article>
        `;
    });
}

function filterProducts() {
    const filter = document.querySelector("#category-filter");

    if (!filter) {
        return;
    }

    const selectedCategory = filter.value;

    if (selectedCategory === "all") {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(
            (product) => product.category === selectedCategory
        );

        displayProducts(filteredProducts);
    }
}

function saveFavorite() {
    const filter = document.querySelector("#category-filter");
    const message = document.querySelector("#favorite-message");

    if (!filter || !message) {
        return;
    }

    const selectedCategory = filter.value;

    if (selectedCategory === "all") {
        message.textContent = "Please select a product category first.";
    } else {
        localStorage.setItem("favoriteCategory", selectedCategory);
        message.textContent = `${selectedCategory} has been saved as your favorite category.`;
    }
}

function loadFavorite() {
    const message = document.querySelector("#favorite-message");

    if (!message) {
        return;
    }

    const favoriteCategory = localStorage.getItem("favoriteCategory");

    if (favoriteCategory) {
        message.textContent = `Your saved favorite category is ${favoriteCategory}.`;
    }
}

function setCurrentYear() {
    const year = document.querySelector("#currentyear");

    if (year) {
        year.textContent = new Date().getFullYear();
    }
}

function setLastModified() {
    const lastModified = document.querySelector("#lastModified");

    if (lastModified) {
        lastModified.textContent = `Last Modified: ${document.lastModified}`;
    }
}

function toggleMenu() {
    const navigation = document.querySelector("nav");

    if (navigation) {
        navigation.classList.toggle("open");
    }
}

displayFeaturedProducts();
displayProducts();
loadFavorite();
setCurrentYear();
setLastModified();

const menuButton = document.querySelector("#menu-button");

if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
}

const categoryFilter = document.querySelector("#category-filter");

if (categoryFilter) {
    categoryFilter.addEventListener("change", filterProducts);
}

const favoriteButton = document.querySelector("#favorite-button");

if (favoriteButton) {
    favoriteButton.addEventListener("click", saveFavorite);
}