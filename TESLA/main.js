const arrow = document.querySelector('.icon-down-open'); 

const menuButton = document.querySelector('.right-bar-nav li:last-child');

const popup = document.querySelector('.popup');



arrow.addEventListener('click',(e) => { 
    
    const key = (e.target.dataset.key);
  
    const section = document.querySelector(`.${key}`).getBoundingClientRect().top + window.pageXOffset + 240; 
    
    window.scrollTo({top:section,behavior:'smooth'}); 
    
}); 
menuButton.addEventListener('click',function () { 
    popup.classList.toggle('activePopup')
});