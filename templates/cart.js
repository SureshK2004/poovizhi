document.addEventListener("DOMContentLoaded", () => {
    const cartCount = localStorage.getItem('cartCount') || 0;
    updateCartBadge(cartCount);
});


document.querySelectorAll('.btn-success').forEach(button => {
    button.addEventListener('click', () => {
        let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
        cartCount++;
        localStorage.setItem('cartCount', cartCount);
        updateCartBadge(cartCount);
    });
});


function updateCartBadge(count) {
    const badge = document.querySelector('.nav-link .badge');
    if (badge) {
        badge.textContent = count;
    }
}

