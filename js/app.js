// update price
function updatePrice(element, ElementPrice){
    document.getElementById(element).innerText = ElementPrice;
    totalPrice();
}

function totalPrice(){
    const bestPrice = parseFloat(document.getElementById('best-price').innerText);
    const memoryPrice = parseFloat(document.getElementById('memory-price').innerText);
    const storagePrice = parseFloat(document.getElementById('storage-price').innerText);
    const deliveryPrice = parseFloat(document.getElementById('delivery-price').innerText);
    const totalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('all-total').innerText = totalPrice;
}

// discount function
function discountPrice(){
    const discountInput = document.getElementById('discount-price');
    const discountText = discountInput.value;
    const totalDiscountPrice = document.getElementById('all-total').innerText;
    if(discountText == 'stevekaku'){
        const discountTotal = totalDiscountPrice - (totalDiscountPrice * 0.2);
        document.getElementById('all-total').innerText = discountTotal;
        discountInput.value = '';

    }
    
}



// memory increase deccrease
document.getElementById('memory-plus').addEventListener('click', function(){
    updatePrice('memory-price', 180);

});
document.getElementById('memory-minus').addEventListener('click', function(){
    updatePrice('memory-price', 0);

});


// storage increase decrease
document.getElementById('storage-plus-no-1').addEventListener('click', function(){
    updatePrice('storage-price', 100);

});

document.getElementById('storage-plus-no-2').addEventListener('click', function(){
    updatePrice('storage-price', 180);

});

document.getElementById('storage-minus').addEventListener('click', function(){
    updatePrice('storage-price', 0);

});

// delivery increase decrease
document.getElementById('delivery-plus').addEventListener('click', function(){
    updatePrice('delivery-price', 20);
   
})

document.getElementById('delivery-minus').addEventListener('click', function(){
    updatePrice('delivery-price', 0);

})

// promo code
document.getElementById('discount-btn').addEventListener('click', function(){
    discountPrice();
})



