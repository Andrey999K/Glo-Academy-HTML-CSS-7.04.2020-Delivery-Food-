const basket = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const modal_dialog = document.querySelector(".modal-dialog");

const close_ = document.querySelector(".close");
const cancel = document.querySelector(".clear-cart");


basket.addEventListener("click", toggleModal);

close_.addEventListener("click", toggleModal);
cancel.addEventListener("click", toggleModal);


function toggleModal() {
    modal.classList.toggle("is-open");
    modal_dialog.classList.toggle("dialog-open");
}

var wow = new WOW({
    mobile: false
}).init();


///////////////////////////////////////////////////////////////////////////////////////////////////////
// НАЧАЛО ИНТЕНСИВА

const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const modal_dialog_auth = document.querySelector(".modal-dialog-auth");
const closeAuth = document.querySelector(".close-auth");
const logInForm = document.querySelector("#logInForm");
const loginInput = document.querySelector("#login");
const userName = document.querySelector(".user-name");
const buttonOut = document.querySelector(".button-out");

let login = localStorage.getItem("gloDelivery");

function toogleModalAuth() {
    modalAuth.classList.toggle("is-open");
    modal_dialog_auth.classList.toggle("dialog-open");
}

buttonAuth.addEventListener('click', toogleModalAuth);
closeAuth.addEventListener('click', toogleModalAuth);

function autorized() {

    function logOut() {
        login = null;
        localStorage.removeItem('gloDelivery');
        buttonAuth.style.display = '';
        userName.style.display = '';
        buttonOut.style.display = '';
        buttonOut.removeEventListener("click", logOut);
        checkAuth();
    }

    console.log('Авторизован');

    userName.textContent = login;

    buttonAuth.style.display = 'none';
    userName.style.display = 'inline';
    buttonOut.style.display = 'block';

    buttonOut.addEventListener('click', logOut)
}

function notAutorized() {
    console.log('Не авторизован');

    function logIn(event) {
        event.preventDefault();
        login = loginInput.value;

        localStorage.setItem('gloDelivery', login);

        toogleModalAuth();
        buttonAuth.removeEventListener('click', toogleModalAuth);
        closeAuth.removeEventListener('click', toogleModalAuth);
        logInForm.removeEventListener('submit', logIn);
        logInForm.reset();
        checkAuth();
    }

    buttonAuth.addEventListener('click', toogleModalAuth);
    closeAuth.addEventListener('click', toogleModalAuth);
    logInForm.addEventListener('submit', logIn);

}

function checkAuth() {
    if (login) {
        autorized();
    } else {
        notAutorized();
    }
}

checkAuth();