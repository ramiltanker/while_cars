const burger = document.querySelector('.header__burger');

const menuHeader = document.querySelector('.header__menu');

const body = document.querySelector('.page');
function classActiveAdd() {
    burger.classList.toggle('active');
    menuHeader.classList.toggle('active');
    body.classList.toggle('lock');
}

burger.addEventListener('click', classActiveAdd);


const descriptionContainer = document.querySelector('.description__container');
const descriptionAdress = Array.from(descriptionContainer.querySelectorAll('.description__adress'));
const descriptionContacts = descriptionContainer.querySelector('.description__contacts');
const descriptionSocialLink = descriptionContainer.querySelector('.description__social-link');
<<<<<<< HEAD
function changeDescriptionColor() {
=======
const page = document.querySelector('.page');

    function changeDescriptionColor() {
>>>>>>> 1eaa0c11948a58ae7c08ee4939053d12599e6c73
    descriptionAdress.forEach(function(event) {
        event.style.color = 'black';
    })
    descriptionContacts.style.color = 'black';
    descriptionSocialLink.style.color = 'black';
        
    }
    
    function callBackDescriptionColor() {
        descriptionAdress.forEach(function(event) {
            event.style.color = 'white';
        })
        descriptionContacts.style.color = 'white';
        descriptionSocialLink.style.color = 'white';
    }
    
    descriptionContainer.addEventListener('mouseover', changeDescriptionColor);
    descriptionContainer.addEventListener('mouseout', callBackDescriptionColor);
}
else {
    $(document).ready(function(){
        $(".description__container").hover(function(){
          $(this).css("background-color", "black");
          }
        );
      });
}

<<<<<<< HEAD
descriptionContainer.addEventListener('mouseover', changeDescriptionColor);
descriptionContainer.addEventListener('mouseout', callBackDescriptionColor);


$(document).ready(function() {
    $('.slider').slick( {
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'linear',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        waitForAnimate: true,
        fade: true,
        centerMode: true,
    });
});
=======
>>>>>>> 1eaa0c11948a58ae7c08ee4939053d12599e6c73
