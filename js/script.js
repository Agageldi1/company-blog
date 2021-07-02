//Вставка картинки посредством ибиджи  //
function ibg() {
   let ibg = document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if (ibg[i].querySelector('img')) { ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')'; } }
}
ibg();

function ibg() {
   $.each($('.ibg'), function (index, val) { if ($(this).find('img').length > 0) { $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")'); } });
}
ibg();

//Активация бургера//

$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__list').toggleClass('_active');;
   });
});

//Прокрутка при клике// //для header link

const headerLinks = document.querySelectorAll('.header__link[data-goto]');
if (headerLinks.length > 0) {
   headerLinks.forEach(headerLink => {
      headerLink.addEventListener("click", onHeaderLinkClick);
   });

   function onHeaderLinkClick(e) {
      const headerLink = e.target;
      if (headerLink.dataset.goto && document.querySelector(headerLink.dataset.goto)) {
         const gotoBlock = document.querySelector(headerLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}
//для scrol icon
const scrolIcons = document.querySelectorAll('.scrol__icon[data-goto]');
if (scrolIcons.length > 0) {
   scrolIcons.forEach(scrolIcon => {
      scrolIcon.addEventListener("click", onScrolIconClick);
   });

   function onScrolIconClick(e) {
      const scrolIcon = e.target;
      if (scrolIcon.dataset.goto && document.querySelector(scrolIcon.dataset.goto)) {
         const gotoBlock = document.querySelector(scrolIcon.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('div').offsetHeight;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}