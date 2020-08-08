$(function(){
    'use strict';
    //feature suffle work
    $('.featured-work ul li').on('click', function(){
       $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class')==='all'){
            $('.image-section .col').css('opacity',1);
        } else {
            $('.image-section .col').css('opacity','0.1');
            $($(this).data('class')).parent().css('opacity',1);
        }
    });
});
const alllinks = document.querySelectorAll(".navbar-nav li a");
function scrollToTarget(elements) {
    
    elements.forEach(element => {
        
        element.addEventListener("click", (e) => {
            
            e.preventDefault();
            
            document.querySelector(e.target.dataset.section).scrollIntoView({
                
                behavior: 'smooth'
      }); 
            
   }); 
        
});  
    
}
scrollToTarget(alllinks);