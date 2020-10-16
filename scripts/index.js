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
const page = document.querySelector('.page');
const widthValue = $(window).width();

if( widthValue > 1080 ) {
    $(document).ready(function(){
        $(".description__container").hover(function(){
          $(this).css("background-color", "rgba(255, 255, 255, 0.85)");
          }, function(){
          $(this).css("background-color", "");
        });
      });
        
    function changeDescriptionColor() {
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

