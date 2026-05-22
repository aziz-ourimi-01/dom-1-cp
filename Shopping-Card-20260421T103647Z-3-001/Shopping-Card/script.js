document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelectorAll(".cart-item");
    const grandTotalEl = document.getElementById("grand-total");

    function updateTotals() {
        let grandTotal = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.dataset.price);
            const qty = parseInt(item.querySelector(".quantity").value, 10) || 1;
            const itemTotal = price * qty;
            item.querySelector(".total-price").textContent = itemTotal.toFixed(2);
            grandTotal += itemTotal;
        });
        grandTotalEl.textContent = grandTotal.toFixed(2);
    }

    cartItems.forEach(item => {
        const minusBtn = item.querySelector(".minus");
        const plusBtn = item.querySelector(".plus");
        const qtyInput = item.querySelector(".quantity");

        minusBtn.addEventListener("click", () => {
            let value = parseInt(qtyInput.value, 10) || 1;
            if (value > 1) {
                qtyInput.value = value - 1;
                updateTotals();
            }
        });

        plusBtn.addEventListener("click", () => {
            let value = parseInt(qtyInput.value, 10) || 1;
            qtyInput.value = value + 1;
            updateTotals();
        });

        qtyInput.addEventListener("input", () => {
            let value = parseInt(qtyInput.value, 10);
            if (isNaN(value) || value < 1) {
                qtyInput.value = 1;
            }
            updateTotals();
        });
    });

    // Initial calculation
    updateTotals();
});