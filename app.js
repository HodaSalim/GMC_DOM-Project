//Buttons Selectors
const incrementBtn = document.querySelectorAll('.plus');
const decrementBtn= document.querySelectorAll('.minus');
const favBtn = document.querySelectorAll('.favorite');
const deleteBtn = document.querySelectorAll('.remove');

//Chnaging Values Selectors
const productQuantity = document.querySelectorAll('.number');
const subtotalAmount = document.querySelector('.subtotal-amount');
const totalAmount = document.querySelector('.total-amount');
const delivery = document.querySelector('.shipping-amount').innerText.slice(1);
const pricesArr = document.querySelectorAll('.cart-item-price');
let total = 0;
//logic for the remove button
for (let i = 0; i < deleteBtn.length; i++){
    deleteBtn[i].addEventListener("click", (e)=>{
        let btnClicked = e.target;
        btnClicked.parentElement.remove();
    });
}
//logic for favorite button
for(let i = 0; i < favBtn.length; i++){
    favBtn[i].addEventListener("click", (e)=>{
        let fav = e.target;
        fav.classList.toggle('favorite-active');
    });
}
//parsing delivery amount into number

//increment button function 
for (let i = 0; i < incrementBtn.length; i++){
    incrementBtn[i].addEventListener("click", (e)=>{
        const quantity = e.target.nextElementSibling;
        quantity. innerText = Number( e.target.nextElementSibling.innerText ) + 1;
        total = total + (Number(pricesArr[i].innerText.slice(1)));
        subtotalAmount.innerText = `$ ${total}`;
        totalAmount.innerText = `$ ${total + Number(delivery)}`;
    });
}
//decrement buttun function
for (let i = 0; i < decrementBtn.length; i++){
    decrementBtn[i].addEventListener("click", (e)=>{
        const quantity = e.target.previousElementSibling;
        if(Number(quantity.innerText > 0)){
            quantity. innerText = Number( e.target.previousElementSibling.innerText ) -1;
            total = total - Number(pricesArr[i].innerText.slice(1));
            subtotalAmount.innerText = `$ ${total}`;

            totalAmount.innerText = `$ ${total + Number(delivery)}`;
        }
    });
}
