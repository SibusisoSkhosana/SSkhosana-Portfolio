console.log("Script loaded");
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

// Get the popup
var popup = document.getElementById('contactPopup');

// Get the link that opens the popup
var contactLink = document.getElementById('contactLink');

// Get the <span> element that closes the popup
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the link, open the popup
contactLink.onclick = function() {
    popup.style.display = 'block';
}

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
    popup.style.display = 'none';
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}
