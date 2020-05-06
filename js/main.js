'use strict';

var wow = new WOW({
    mobile: false,
}).init();


///////////////////////////////////////////////////////////////////////////////////////////////////////
// НАЧАЛО ИНТЕНСИВА
const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const modal_dialog = document.querySelector(".modal-dialog");
const close_ = document.querySelector(".close");
const cancel = document.querySelector(".clear-cart");

const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const modal_dialog_auth = document.querySelector(".modal-dialog-auth");
const closeAuth = document.querySelector(".close-auth");
const logInForm = document.querySelector("#logInForm");
const loginInput = document.querySelector("#login");
const userName = document.querySelector(".user-name");
const buttonOut = document.querySelector(".button-out");
const cardsRestaurants = document.querySelector(".cards-restaurants");
const containerPromo = document.querySelector('.container-promo');
const restaurants = document.querySelector('.restaurants')
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const cardsMenu = document.querySelector('.cards-menu');

let login = localStorage.getItem("gloDelivery");

function toggleModal() {
    modal.classList.toggle("is-open");
    modal_dialog.classList.toggle("dialog-open");
}

function toogleModalAuth() {
    modalAuth.classList.toggle("is-open");
    modal_dialog_auth.classList.toggle("dialog-open");
}

function autorized() {
    function logOut() {
        login = null;
        localStorage.removeItem("gloDelivery");
        buttonAuth.style.display = "";
        userName.style.display = "";
        buttonOut.style.display = "";
        buttonOut.removeEventListener("click", logOut);
        checkAuth();
    }

    console.log("Авторизован");

    userName.textContent = login;

    buttonAuth.style.display = "none";
    userName.style.display = "inline";
    buttonOut.style.display = "block";

    buttonOut.addEventListener("click", logOut);
}

function notAutorized() {
    console.log("Не авторизован");

    function logIn(event) {
        event.preventDefault();

        if (loginInput.value) {
            login = loginInput.value;
            localStorage.setItem("gloDelivery", login);
            toogleModalAuth();
            buttonAuth.removeEventListener("click", toogleModalAuth);
            closeAuth.removeEventListener("click", toogleModalAuth);
            logInForm.removeEventListener("submit", logIn);
            logInForm.reset();
            checkAuth();
        } else {
            loginInput.style.borderColor = "red";
        }
    }

    buttonAuth.addEventListener("click", toogleModalAuth);
    closeAuth.addEventListener("click", toogleModalAuth);
    logInForm.addEventListener("submit", logIn);
}

function checkAuth() {
    if (login) {
        autorized();
    } else {
        notAutorized();
    }
}

function createCardRestaurant() {
    const card = `
    <a class="card card-restaurant wow fadeInUp" data-wow-delay="0.3s">
        <img src="img/tanuki/preview.jpg" alt="image" class="card-image" />
        <div class="card-text">
        <div class="card-heading">
                <h3 class="card-title">Тануки</h3>
                <span class="card-tag tag">60 мин</span>
            </div>
            <div class="card-info">
                <div class="rating">4.5</div>
                <div class="price">От 1 200 ₽</div>
                <div class="category">Суши, роллы</div>
            </div>
        </div>
    </a>
  `;

    cardsRestaurants.insertAdjacentHTML('beforeend', card);
}

function createCardGood() {
    const card = document.createElement('div');
    card.className = 'card';
    card.insertAdjacentHTML('beforeend', `
        <img src="img/pizza-plus/pizza-classic.jpg" alt="image" class="card-image" />
        <div class="card-text">
            <div class="card-heading">
                <h3 class="card-title card-title-reg">Пицца Классика</h3>
            </div>
            <div class="card-info">
                <div class="ingredients">Соус томатный, сыр «Моцарелла», сыр «Пармезан», ветчина,
                    салями,
                    грибы.
                </div>
            </div>
            <div class="card-buttons">
                <button class="button button-primary button-add-cart">
                    <span class="button-card-text">В корзину</span>
                    <span class="button-cart-svg"></span>
                </button>
                <strong class="card-price-bold">510 ₽</strong>
            </div>
        </div>
    `);

    cardsMenu.insertAdjacentElement('beforeend', card);
}

function openGoods(event) {
    const target = event.target;

    const restaurant = target.closest('.card-restaurant');
    if (restaurant) {
        cardsMenu.textContent = '';
        containerPromo.classList.add('hide');
        restaurants.classList.add('hide');
        menu.classList.remove('hide');

        createCardGood();
        createCardGood();
        createCardGood();
    }

}

cartButton.addEventListener("click", toggleModal);

close_.addEventListener("click", toggleModal);

cancel.addEventListener("click", toggleModal);

buttonAuth.addEventListener("click", toogleModalAuth);
closeAuth.addEventListener("click", toogleModalAuth);

cardsRestaurants.addEventListener('click', openGoods);
logo.addEventListener('click', function () {
    containerPromo.classList.remove('hide')
    restaurants.classList.remove('hide')
    menu.classList.add('hide')
})

checkAuth();

createCardRestaurant();
createCardRestaurant();
createCardRestaurant();