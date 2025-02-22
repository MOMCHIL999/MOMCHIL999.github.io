// ds.js

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
