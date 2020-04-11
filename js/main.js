const basket = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const modal_dialog = document.querySelector(".modal-dialog");

const close_ = document.querySelector(".close");
const cancel = document.querySelector(".cancel");


basket.addEventListener("click", toggleModal);

close_.addEventListener("click", toggleModal);
cancel.addEventListener("click", toggleModal);


function toggleModal() {
    modal.classList.toggle("is-open");
    modal_dialog.classList.toggle("basket-open");
}

new WOW({
    mobile: false
}).init();