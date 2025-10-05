


document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    const VALID_EMAIL = 'gasdean@gmail.com';
    const VALID_PASS = 'password';

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const enteredEmail = emailInput.value.trim();
        const enteredPassword = passwordInput.value.trim();

        if(enteredEmail === VALID_EMAIL && enteredPassword === VALID_PASS){
            loggedIn();
            console.log("successfully logged in!");
        } else {
            document.getElementById('authMsg').innerHTML = 'Login failed, invalid username or password';
            console.log("Login failed");
        }


    });


});

function loggedIn(){
    document.querySelector('#login h1').innerHTML = 'Florentino Dean P. Gas';
    loginForm = document.getElementById('loginForm');
    loginForm.remove();
}

function addToCart(){
    item = document.getElementById('card');
    container = document.getElementById('cart');
    const cartItem = item.cloneNode(true);

    if(container){
        console.log("Adding to cart");
        container.append(cartItem);
    } else {
        console.log("Error");
    }
}



function toggleLogin(){
    const loginOverlay = document.getElementById('login');
    loginOverlay.classList.toggle('is-hidden');
    console.log("Hiding Login")
}

document.addEventListener('DOMContentLoaded', ()=> {toggleLogin();});


function toggleCart(){
    const cartOverlay = document.getElementById('cart-container');
    cartOverlay.classList.toggle('is-hidden');
    console.log("Hiding cart");
}
document.addEventListener('DOMContentLoaded', ()=> {toggleCart();});


function addItem(){
const card = document.createElement('div');
card.id = 'card';

const productImage = document.createElement('img');
productImage.src = 'assets/img/shoes/nike/ja2hearteyes.PNG'
productImage.id = 'productImage';

card.appendChild(productImage);

const container = document.getElementById('contents');


if(container){
    console.log("Adding item");
    container.appendChild(card);
} else {
    console.log("Cannot find container")
}

}