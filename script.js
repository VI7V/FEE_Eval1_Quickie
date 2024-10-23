function toggleCart() {
    const sideCart = document.getElementById("sideCart");
    if (sideCart.classList.contains("open")) {
        sideCart.classList.remove("open");
    } else {
        sideCart.classList.add("open");
    }
}




document.addEventListener('DOMContentLoaded', function() {
    // Select all 'Add to Cart' buttons
    document.querySelectorAll('.addToCartButton').forEach(function(button) {
        button.addEventListener('click', function() {
            const buttonContainer = button.parentElement;
            const counter = buttonContainer.querySelector('.counter-buttons');
            
            // Hide the "Add" button and show the counter
            button.style.display = 'none';
            counter.style.display = 'flex';
            
            let quantity = 1; // Initial quantity
            const quantityDisplay = counter.querySelector('.quantity');
            
            // Increment functionality
            counter.querySelector('.increment').addEventListener('click', function() {
                quantity++;
                quantityDisplay.textContent = quantity;
            });
            
            // Decrement functionality
            counter.querySelector('.decrement').addEventListener('click', function() {
                if (quantity > 1) {
                    quantity--;
                    quantityDisplay.textContent = quantity;
                } else {
                    // Reset to "Add" button if quantity reaches 1 and decrement is clicked
                    button.style.display = 'block';
                    counter.style.display = 'none';
                    quantity = 1; // Reset quantity
                    quantityDisplay.textContent = quantity;
                }
            });
        });
    });
});





function toggleMenu() {
    document.getElementById("sideMenu").style.width = "250px";
}

function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
}
