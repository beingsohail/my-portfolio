
const burgerButton = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const serviceButton = document.querySelectorAll(".service-button");


serviceButton.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(button.id);
        let clickedButton = document.querySelector(`.service-text${button.id}`)
        clickedButton.classList.toggle("active")
    })
})


burgerButton.addEventListener('click', function() {
    navbar.classList.toggle("navbarShow");
    burgerButton.classList.toggle("rotate")
})


