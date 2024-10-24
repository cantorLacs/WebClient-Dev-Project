
//sidebar
var button = document.getElementById("hamburger-button");
var menu = document.getElementById("Side-bar");

var isMenuOpen = true;

button.addEventListener("click", function () {
    if (isMenuOpen) {
        isMenuOpen = false;
        menu.style.marginLeft = "-72px";
    } else {

        isMenuOpen = true;
        menu.style.marginLeft = "0px";
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth <= 750) {
        isMenuOpen = false;
        menu.style.marginLeft = "-72px";

    } else {
        isMenuOpen = true;
        menu.style.marginLeft = "0px";

    }
});

//contact form
var isEmailValid = false;
document.getElementById('contact-form').addEventListener('submit', function (event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name == '' || email == '' || message == '') {
        alert('Please fill in all fields');
        event.preventDefault();
    }
    else if (!isEmailValid) {
        alert('Please Enter a valid Email');
        event.preventDefault();
    }
    else {
        alert('Form submitted!');
    }
});


///Eamil validation
document.getElementById('email').addEventListener('blur', function (event) {
    var email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address. It should be in the format: "example@domain.com"');
        isEmailValid = false;
    }
    else {
        isEmailValid = true;
    }

});

// Section change
document.getElementById('button-Home').addEventListener('click', function () {
    document.getElementById('Home-container').style.display = 'block';
    document.getElementById('CV-container').style.display = 'none';
    document.getElementById('contact-container').style.display = 'none';
    document.getElementById('About-container').style.display = 'none';

});

document.getElementById('button-CV').addEventListener('click', function () {
    document.getElementById('Home-container').style.display = 'none';
    document.getElementById('CV-container').style.display = 'block';
    document.getElementById('contact-container').style.display = 'none';
    document.getElementById('About-container').style.display = 'none';
});


document.getElementById('button-Contact').addEventListener('click', function () {
    document.getElementById('Home-container').style.display = 'none';
    document.getElementById('CV-container').style.display = 'none';
    document.getElementById('contact-container').style.display = 'block';
    document.getElementById('About-container').style.display = 'none';
});

document.getElementById('button-About').addEventListener('click', function () {
    document.getElementById('Home-container').style.display = 'none';
    document.getElementById('CV-container').style.display = 'none';
    document.getElementById('contact-container').style.display = 'none';
    document.getElementById('About-container').style.display = 'block';
});

// section change from home menu

document.getElementById('button-CV-home').addEventListener('click', function () {
    document.getElementById('Home-container').style.display = 'none';
    document.getElementById('CV-container').style.display = 'block';
    document.getElementById('contact-container').style.display = 'none';
    document.getElementById('About-container').style.display = 'none';
});


document.getElementById('button-About-home').addEventListener('click', function () {
    document.getElementById('Home-container').style.display = 'none';
    document.getElementById('CV-container').style.display = 'none';
    document.getElementById('contact-container').style.display = 'none';
    document.getElementById('About-container').style.display = 'block';

});

document.getElementById('button-Contact-home').addEventListener('click', function () {
    document.getElementById('Home-container').style.display = 'none';
    document.getElementById('CV-container').style.display = 'none';
    document.getElementById('contact-container').style.display = 'block';
    document.getElementById('About-container').style.display = 'none';
});

// background change
var isSlideshowActive = true;
var slideIndex = 1;
showSlides(slideIndex);

var timeout = null;
timeout = setTimeout(automaticChange, 7000);

function currentSlide(n) {
    slideIndex = n
    showSlides(slideIndex);
    if (timeout !== null) {
        clearTimeout(timeout);
        timeout = setTimeout(automaticChange, 7000);
    }
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("background");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function automaticChange() {
    slideIndex++;
    showSlides(slideIndex);
    timeout = setTimeout(automaticChange, 12000);
}

// background change stop

function stopSlideshow() {
    if (isSlideshowActive) {
        clearTimeout(timeout);
        isSlideshowActive = false;
        changetext()

    } else {
        timeout = setTimeout(automaticChange, 12000);
        isSlideshowActive = true;
        changetext()


    }
}


// change play pause tooltip

function changetext() {
    var tooltip = document.getElementById("tooltip-play-pause");
    if (isSlideshowActive) {
        tooltip.innerText = "Pause";
    }
    else {
        tooltip.innerText = "Play";
    }
}


