function toggleCart() {
    const sideCart = document.getElementById("sideCart");
    if (sideCart.classList.contains("open")) {
        sideCart.classList.remove("open");
    } else {
        sideCart.classList.add("open");
    }
}
