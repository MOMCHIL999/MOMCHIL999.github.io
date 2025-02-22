// Масив за съхраняване на добавените артикули в количката (с име и цена)
let basketItems = [];

// Функция за превключване на падащото меню на количката
function toggleBasket() {
    const dropdown = document.getElementById('basketDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Пренасочване към страницата на количката
function goToBasket() {
    window.location.href = 'form.html'; // Заменете с вашия URL на страницата за количката
}

// Изчистване на всички артикули от количката
function clearBasket() {
    basketItems = []; // Изчистване на масива
    updateBasketCounter(); // Нулиране на брояча
    updateBasketDropdown(); // Актуализиране на потребителския интерфейс
}

// Актуализиране на брояча на количката
function updateBasketCounter() {
    const counter = document.querySelector('.basket-counter');
    counter.textContent = basketItems.length;
}

// Актуализиране на падащото меню на количката за показване на добавените артикули
function updateBasketDropdown() {
    const basketDropdown = document.getElementById('basketDropdown');
    let itemList = '';
    let totalPrice = 0;

    basketItems.forEach(item => {
        itemList += `<p>${item.name} - ${item.price.toFixed(2)} лв.</p>`;
        totalPrice += item.price;
    });

    basketDropdown.innerHTML = `<p>Вашата количка:</p>` + itemList + 
                               `<p><strong>Общо: ${totalPrice.toFixed(2)} лв.</strong></p>` +
                               `<button onclick="goToBasket()">Към количката</button>` +
                               `<button onclick="clearBasket()">Изчисти количката</button>`;
}

// Добавяне на артикул в количката с име и цена
function addToCart(itemName, itemPrice) {
    basketItems.push({ name: itemName, price: itemPrice });
    updateBasketCounter();
    updateBasketDropdown();
}

// Затваряне на падащото меню при клик извън него
window.onclick = function(event) {
    const dropdown = document.getElementById('basketDropdown');
    if (!event.target.matches('.basket-icon')) {
        dropdown.style.display = 'none';
    }
};

// Filter function for filtering cards based on selected checkboxes
document.querySelectorAll('.filter-option').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const selectedFilters = Array.from(document.querySelectorAll('.filter-option:checked')).map(cb => cb.value);
        document.querySelectorAll('.card').forEach(card => {
            if (selectedFilters.length === 0) {
                card.style.display = 'block';
            } else {
                card.style.display = selectedFilters.some(filter => card.classList.contains(filter)) ? 'block' : 'none';
            }
        });
    });
});

// Function to toggle the mobile menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    
    // Toggle active classes
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Optional: Close the menu when clicking outside (for mobile devices)
document.addEventListener('click', function(e) {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Hover effect for card images
document.querySelectorAll('.card').forEach(card => {
    const img = card.querySelector('.default-img');
    const hoverImgSrc = img.getAttribute('data-hover'); // Set hover image in `data-hover`

    card.addEventListener('mouseenter', () => {
        img.src = hoverImgSrc; // Change image on hover
    });

    card.addEventListener('mouseleave', () => {
        img.src = img.getAttribute('data-original'); // Change back on unhover
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Get the query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    
    // Get the category filter from the URL (e.g., "men", "women", "kids")
    const category = urlParams.get('category');
    
    if (category) {
        // Get all filter checkboxes
        const checkboxes = document.querySelectorAll('.filter-option');
        
        // Loop through each checkbox
        checkboxes.forEach(checkbox => {
            // If the checkbox value matches the category, check it
            if (checkbox.value === category) {
                checkbox.checked = true;
            }
        });
    }
});






