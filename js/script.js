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

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд */
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд */
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots-item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}