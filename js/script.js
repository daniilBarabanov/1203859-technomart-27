var link = document.querySelector(".write-us");

var popup = document.querySelector(".form-write-us");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var names = popup.querySelector("[name=yourname]");
var emails = popup.querySelector("[name=youremail]");
var letter = popup.querySelector("[name=yourmail]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("names");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        names.value = storage;
        emails.focus();
    }
    names.focus();
});



close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
    if (!names.value || !emails.value || !letter.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("names", names.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
})


var mapLink = document.querySelector(".route");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});
mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            mapPopup.classList.remove("modal-show");
        }
    }
});


var buyLink = document.querySelector(".button-buy");
var buyPopup = document.querySelector(".pop-buy");
var buyClose = buyPopup.querySelector(".modal-close");

buyLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.add("modal-show");
});
buyClose.addEventListener("click", function(evt) {
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