const products = [
    {
        name: "Coconut Bread",
        description: "A soft loaf with a rich coconut flavor, baked for a satisfying sweet-bread experience.",
        category: "Sweet Bread",
        image: "images/cocobread.jpeg",
        width: 678,
        height: 452
    },
    {
        name: "Family Loaf",
        description: "A fresh, generous loaf that is ideal for sharing with family and serving at everyday meals.",
        category: "Bread",
        image: "images/family_loaf.jpeg",
        width: 737,
        height: 416
    },
    {
        name: "Buns and Milk Bread",
        description: "Soft, tasty baked bread that works well as a snack or a convenient everyday treat.",
        category: "Pastry",
        image: "images/milkbread.jpeg",
        width: 495,
        height: 619
    },
    {
        name: "Mini Loaf",
        description: "A convenient smaller loaf for individuals, smaller households, and light meals.",
        category: "Bread",
        image: "images/mini.jpeg",
        width: 960,
        height: 720
    },
    {
        name: "Soft Bite Bread",
        description: "A light, soft bread with a pleasant texture for breakfast, snacks, or sandwiches.",
        category: "Bread",
        image: "images/softbite.jpeg",
        width: 500,
        height: 500
    }
];

function createProductCard(product) {
    return `
        <article class="product-card">
            <img src="${product.image}"
                 alt="${product.name} from D'ose Crust Bakery"
                 width="${product.width}"
                 height="${product.height}"
                 loading="lazy"
                 decoding="async">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Category:</strong> ${product.category}</p>
        </article>
    `;
}

function displayFeaturedProducts() {
    const featuredContainer = document.querySelector("#featured-products");

    if (featuredContainer) {
        const featuredProducts = products.slice(0, 3);
        featuredContainer.innerHTML = featuredProducts.map(createProductCard).join("");
    }
}

function displayProducts(productList = products) {
    const productContainer = document.querySelector("#products-container");

    if (!productContainer) {
        return;
    }

    if (productList.length === 0) {
        productContainer.innerHTML = `<p>No products were found in this category.</p>`;
        return;
    }

    productContainer.innerHTML = productList.map(createProductCard).join("");
}

function filterProducts() {
    const filter = document.querySelector("#category-filter");

    if (!filter) {
        return;
    }

    const selectedCategory = filter.value;
    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    displayProducts(filteredProducts);
}

function saveFavorite() {
    const filter = document.querySelector("#category-filter");
    const message = document.querySelector("#favorite-message");

    if (!filter || !message) {
        return;
    }

    const selectedCategory = filter.value;

    if (selectedCategory === "all") {
        message.textContent = `Please select a product category first.`;
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
    const navigation = document.querySelector("#primary-navigation");
    const menuButton = document.querySelector("#menu-button");

    if (navigation && menuButton) {
        const isOpen = navigation.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    }
}

function closeMenuAfterNavigation() {
    const navigation = document.querySelector("#primary-navigation");
    const menuButton = document.querySelector("#menu-button");

    if (navigation && menuButton && window.innerWidth < 700) {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
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

const navigationLinks = document.querySelectorAll("#primary-navigation a");
navigationLinks.forEach((link) => {
    link.addEventListener("click", closeMenuAfterNavigation);
});

const categoryFilter = document.querySelector("#category-filter");
if (categoryFilter) {
    categoryFilter.addEventListener("change", filterProducts);
}

const favoriteButton = document.querySelector("#favorite-button");
if (favoriteButton) {
    favoriteButton.addEventListener("click", saveFavorite);
}
