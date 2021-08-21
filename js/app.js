function getAdditionSpec(price, addExtra) {
    const addExtraCost = document.getElementById(addExtra + '-cost');
    addExtraCost.innerText = price;
    // calculate total
    calculateTotal();
}

function getTotalCost(addExtra) {
    const extraCost = document.getElementById(addExtra + '-cost').innerText;
    const productExtraCost = parseInt(extraCost);
    return productExtraCost;
}

function calculateTotal() {
    const bestPrice = document.getElementById('bestPrice-cost').innerText;
    const bestPriceCost = parseInt(bestPrice);
    const addExtraMemory = getTotalCost('memory');
    const addExtraStorage = getTotalCost('storage');
    const addDeliveryOption = getTotalCost('delivery');
    const TotalPrice = parseInt(bestPriceCost + addExtraMemory + addExtraStorage + addDeliveryOption);
    // update on html
    document.getElementById('total-price').innerText = TotalPrice;
    document.getElementById('totalCost-afterPromo').innerText = TotalPrice;
}

// Total cost after using promo 
document.getElementById('promo-btn').addEventListener('click', function () {
    const promoInputField = document.getElementById('promo');
    const promoInput = promoInputField.value;
    if (promoInput == 'stevekaku') {
        const finalCost = document.getElementById('total-price').innerText;
        const afterPromoDiscount = finalCost * 0.20;
        const afterPromoCost = finalCost - afterPromoDiscount;
        document.getElementById('totalCost-afterPromo').innerText = afterPromoCost;
        promoInputField.value = '';
    }
    else {
        promoInputField.value = '';
        alert('Please use valid promo');
    }
});

// Event handler 
document.getElementById('8gb-memory').addEventListener('click', function () {
    getAdditionSpec(0, 'memory');
});
document.getElementById('16gb-memory').addEventListener('click', function () {
    getAdditionSpec(180, 'memory');
})
document.getElementById('256gb-storage').addEventListener('click', function () {
    getAdditionSpec(0, 'storage');
});
document.getElementById('512gb-storage').addEventListener('click', function () {
    getAdditionSpec(100, 'storage');
});
document.getElementById('1tb-storage').addEventListener('click', function () {
    getAdditionSpec(180, 'storage');
});
document.getElementById('free-delivery').addEventListener('click', function () {
    getAdditionSpec(0, 'delivery');
});
document.getElementById('paid-delivery').addEventListener('click', function () {
    getAdditionSpec(20, 'delivery');
});

