
// Data for each category
const foodData = {
    appetizers: [
        { name: "Samosa", price: "₹80", description: "A delicious fried pastry filled with spiced potatoes.", image: "/images/samosa.jpg" },
        { name: "Pani Puri", price: "₹50", description: "Crispy puris filled with tamarind water and spicy potatoes.", image: "/images/panipuri.webp" },
        { name: "Pakora", price: "₹70", description: "Fried fritters made with gram flour and potatoes.", image: "/images/pakoda.jpeg" },
        { name: "Dhokla", price: "₹60", description: "Steamed spongy cake made from fermented rice and chickpea flour.", image: "/images/dhokla.jpg" },
        { name: "Aloo Tikki", price: "₹90", description: "Fried potato patties served with tamarind chutney.", image: "/images/alootikki.jpeg" },
        { name: "Pav Bhaji", price: "₹120", description: "Spicy mashed vegetables served with buttered pav.", image: "/images/pavbhaji.jpg" },
        { name: "Kachori", price: "₹60", description: "Fried pastry filled with spicy lentils.", image: "/images/kachori.jpg" }
    ],
    maindishes: [
        { name: "Butter Chicken", price: "₹250", description: "Creamy chicken curry with buttery tomato sauce.", image: "butterchicken.jpg" },
        { name: "Paneer Butter Masala", price: "₹180", description: "Paneer cubes cooked in a rich buttery tomato gravy.", image: "paneerbuttermasala.jpg" },
        { name: "Biryani", price: "₹300", description: "Fragrant rice dish with marinated chicken and spices.", image: "biryani.jpg" },
        { name: "Dal Tadka", price: "₹120", description: "Yellow lentils cooked with tempering of garlic, cumin, and ghee.", image: "daltadka.jpg" },
        { name: "Palak Paneer", price: "₹150", description: "Paneer cubes in a spinach curry.", image: "palakpaneer.jpg" },
        { name: "Tandoori Chicken", price: "₹200", description: "Grilled chicken marinated in tandoori spices.", image: "tandoorichicken.jpg" },
        { name: "Rogan Josh", price: "₹280", description: "Lamb curry with rich and aromatic spices.", image: "roganjosh.jpg" },
        { name: "Kadhi Pakora", price: "₹140", description: "Fried gram flour dumplings in a tangy yogurt-based curry.", image: "kadhipakora.jpg" },
        { name: "Chole Bhature", price: "₹180", description: "Spicy chickpea curry with deep-fried bread.", image: "cholebhature.jpg" },
        { name: "Chicken Korma", price: "₹250", description: "Aromatic chicken curry with a blend of spices and nuts.", image: "chickenkorma.jpg" }
    ],
    desserts: [
        { name: "Gulab Jamun", price: "₹50", description: "Fried dumplings soaked in sugary syrup.", image: "gulabjamun.jpg" },
        { name: "Rasgulla", price: "₹60", description: "Spongy balls of chhena soaked in light syrup.", image: "rasgulla.jpg" },
        { name: "Jalebi", price: "₹40", description: "Crispy fried rings soaked in sweet syrup.", image: "jalebi.jpg" },
        { name: "Rava Kesari", price: "₹80", description: "Sweet semolina dessert with ghee and cardamom.", image: "ravakesari.jpg" },
        { name: "Kheer", price: "₹100", description: "Rice pudding with milk, sugar, and cardamom.", image: "kheer.jpg" },
        { name: "Mysore Pak", price: "₹90", description: "Rich, dense sweet made with ghee and gram flour.", image: "mysorepak.jpg" },
        { name: "Ladoo", price: "₹50", description: "Sweet balls made from flour, sugar, and ghee.", image: "ladoo.jpg" },
        { name: "Barfi", price: "₹70", description: "Milk-based sweet with nuts and cardamom.", image: "barfi.jpg" },
        { name: "Pista Kulfi", price: "₹120", description: "Pistachio-flavored Indian ice cream.", image: "pistakulfi.jpg" },
        { name: "Falooda", price: "₹150", description: "Rose syrup, vermicelli, and sweet basil seeds with milk.", image: "falooda.jpg" }
    ],
    beverages: [
        { name: "Masala Chai", price: "₹40", description: "Spiced Indian tea brewed with milk and spices.", image: "masalachai.jpg" },
        { name: "Lassi", price: "₹60", description: "Sweet or salty yogurt drink.", image: "lassi.jpg" },
        { name: "Thums Up", price: "₹50", description: "Popular Indian cola drink.", image: "thumsup.jpg" },
        { name: "Nimbu Pani", price: "₹30", description: "Refreshing lemon water with sugar and salt.", image: "nimbupani.jpg" },
        { name: "Sugarcane Juice", price: "₹70", description: "Freshly pressed sugarcane juice.", image: "sugarcanejuice.jpg" },
        { name: "Buttermilk", price: "₹50", description: "Chilled buttermilk with spices.", image: "buttermilk.jpg" },
        { name: "Chaas", price: "₹40", description: "Spiced yogurt drink.", image: "chaas.jpg" },
        { name: "Rooh Afza", price: "₹60", description: "Sweet rose syrup with water or milk.", image: "roohafza.jpg" },
        { name: "Coffee", price: "₹100", description: "Indian-style brewed coffee.", image: "coffee.jpg" },
        { name: "Cold Coffee", price: "₹120", description: "Iced coffee with milk and sugar.", image: "coldcoffee.jpg" }
    ]
};
// Function to render the selected category
function loadCategory(category) {
    const foodItems = document.getElementById('food-items');
    foodItems.innerHTML = ''; // Clear any previous content

    const categoryItems = foodData[category];

    // Render each item
    categoryItems.forEach(function(item) {
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="food-card">
                <div class="foodimg">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="nameprice">
                    <h3>${item.name}</h3>
                    <div class="price">${item.price}</div>
                </div>
                <p>${item.description}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
        foodItems.appendChild(card);

        // Add event listener for 'Add to Cart' button
        card.querySelector('.add-to-cart').addEventListener('click', () => addToCart(item));
    });
}

// Call the default category
document.addEventListener('DOMContentLoaded', function () {
    loadCategory('appetizers');

    const buttons = document.querySelectorAll('.nav-button'); // Assuming these are your category buttons
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const category = button.getAttribute('data-category');
            loadCategory(category);
        });
    });
});

let cart = []; // Cart array to store items

// Function to add items to the cart
function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
        existingItem.quantity += 1; // If the item is already in the cart, increase the quantity
    } else {
        cart.push({ ...item, quantity: 1 }); // If the item is new, add it to the cart
    }
    renderCart(); // Update the cart display
}

// Render the cart section
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous cart items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((cartItem, index) => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item';
            cartItemDiv.innerHTML = `
                <div class="cart-item-image">
                    <img src="${cartItem.image}" alt="${cartItem.name}">
                </div>
                <div class="cart-item-info">
                    <h4>${cartItem.name}</h4>
                    <div class="cart-item-price">${cartItem.price}</div>
                    <div class="cart-item-quantity">
                        <button class="decrease-quantity" data-index="${index}">-</button>
                        <span>${cartItem.quantity}</span>
                        <button class="increase-quantity" data-index="${index}">+</button>
                    </div>
                    <button class="remove-item" data-index="${index}">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
        });
    }

    // Calculate total price
    updateTotalAmount();

    // Attach event listeners for quantity controls and removing items
    attachCartEventListeners();
}


// Attach event listeners for increase, decrease, and remove buttons
function attachCartEventListeners() {
    // Increase quantity
    document.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            cart[index].quantity += 1;
            renderCart();
        });
    });

    // Decrease quantity
    document.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            } else {
                cart.splice(index, 1); // Remove item if quantity is 1 and user decreases it
            }
            renderCart();
        });
    });

    // Remove item from cart
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            cart.splice(index, 1); // Remove the item from the cart
            renderCart();
        });
    });
}

// Update the total amount in the cart
function updateTotalAmount() {
    const totalAmountCart = cart.reduce((sum, cartItem) => sum + (parseFloat(cartItem.price.replace('₹', '')) * cartItem.quantity), 0);
    document.getElementById('total-amount-cart').innerText = totalAmountCart.toFixed(2);
}

// Open the payment popup and show total payable
function openPaymentPopup() {
    const popup = document.getElementById('payment-popup');
    const cartItemsList = document.getElementById('cart-items-list');
    const popupTotalAmount = document.getElementById('popup-total-amount');

    // Reset cart list
    cartItemsList.innerHTML = '';

    // Initialize total price for popup
    let totalPrice = 0;

    // Iterate through cart items for popup
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <div>Quantity: ${item.quantity}</div>
            <div>Price: ₹${Number(item.price) * Number(item.quantity)}</div>
        `;
        cartItemsList.appendChild(cartItem);

        // Calculate total price ensuring both price and quantity are numbers
        totalPrice += Number(item.price) * Number(item.quantity);
    });

    // Set total price in the popup
    popupTotalAmount.innerText = totalPrice.toFixed(2);  // Ensures two decimal points

    // Show popup
    popup.style.display = 'flex';
}

// Close the payment popup
function closePaymentPopup() {
    const popup = document.getElementById('payment-popup');
    popup.style.display = 'none';
}


function placeOrder() {
    const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked');
    
    // Check if a payment method is selected
    if (!selectedPaymentMethod) {
        alert('Please select a payment method.');
        return; // Stop execution if no method is selected
    }

    const ordersList = document.getElementById('orders-list');
    const totalAmount = document.getElementById('total-amount-cart').innerText;
    
    // Get current date and time
    const orderTime = new Date().toLocaleString();

    // Create a new order summary container
    const orderItem = document.createElement('div');
    orderItem.classList.add('order-item');
    orderItem.style.border = "1px solid #ddd";
    orderItem.style.padding = "1rem";
    orderItem.style.marginBottom = "1rem";
    orderItem.style.borderRadius = "10px";
    orderItem.style.backgroundColor = "#f9f9f9";

    // Create a detailed summary of the items
    let orderSummary = `<h4>Order Summary</h4>`;
    orderSummary += `<div><strong>Payment Method:</strong> ${selectedPaymentMethod.value}</div>`;
    orderSummary += `<div><strong>Time of Order:</strong> ${orderTime}</div>`;
    orderSummary += `<div><strong>Items Ordered:</strong></div><ul>`;

    // List each item with quantity and price
    cart.forEach(item => {
        orderSummary += `<li>${item.name} - Quantity: ${item.quantity} - Price: ₹${(Number(item.price) * item.quantity).toFixed(2)}</li>`;
    });

    orderSummary += `</ul>`;
    orderSummary += `<div><strong>Total Amount:</strong> ₹${totalAmount}</div>`;

    // Add the order summary to the new order item container
    orderItem.innerHTML = orderSummary;
    
    // Append the new order item to the orders list
    ordersList.appendChild(orderItem);

    // Close popup after placing the order
    closePaymentPopup();
    
    // Clear the cart
    cart = [];
    renderCart();
}



// Event listeners
document.getElementById('place-order-btn').addEventListener('click', placeOrder);
document.getElementById('close-popup-btn').addEventListener('click', closePaymentPopup);


