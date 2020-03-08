var buyLink = document.querySelectorAll(".button-buy"),
    index, button;
var buyPopup = document.querySelector(".pop-buy");
var buyClose = buyPopup.querySelector(".modal-close");
var buyCont = buyPopup.querySelector(".continue");

for (index = 0; index < buyLink.length; index++) {
    button = buyLink[index];

    button.addEventListener("click", function(evt) {
        evt.preventDefault();
        buyPopup.classList.add("modal-show");
    });
    buyClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        buyPopup.classList.remove("modal-show");
    });
    buyCont.addEventListener("click", function(evt) {
        evt.preventDefault();
        buyPopup.classList.remove("modal-show");
    });
    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            if (buyPopup.classList.contains("modal-show")) {
                evt.preventDefault();
                buyPopup.classList.remove("modal-show");
            }
        }
    });
}