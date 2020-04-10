const basket = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close_ = document.querySelector(".close");


basket.addEventListener("click", toggleModal);

close_.addEventListener("click", toggleModal);

function toggleModal() {
    modal.classList.toggle("is-open");
}

new WOW().init();