var finalPrize = 0;

function editCartInput(number) {
    var input = document.getElementById('cart-amount');
    var value = input.value;

    if(number > 0){value++;}
    if(number < 0){value--;}
    
    input.value = value;
    if(input.value == 0) input.value = 1;

    prize(value);
}

function prize(value) {
    var prize = document.getElementsByClassName('cart-text-prize');
    var lastPrize = document.getElementById('last-prize');
    
    for(i = 0 ; i < prize.length ; i++) {
        finalPrize += parseFloat(prize[i].textContent);
        finalPrize *= value;
    }

    lastPrize.innerText = finalPrize.toFixed(2) + "€";
    finalPrize = 0;
}