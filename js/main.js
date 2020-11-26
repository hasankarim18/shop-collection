var backdrop = document.querySelector('.backdrop')

var cartButton = document.querySelector('.cart')

var cartCross = document.querySelector('.cart-cross')

var cartPanel = document.querySelector('.cart-panel')

var searchPanel = document.querySelector('.search-panel');

var searchOpen = document.querySelector('.search-open')

var searchCross = document.querySelector('.search-cross')




cartButton.addEventListener("click", function(){
    backdrop.style.display = 'block';
    cartPanel.style.display = 'block'
    
})

backdrop.addEventListener('click', function(){
    backdrop.style.display = 'none';
    searchPanel.style.display = 'none';
    mobileNav.style.display = 'none';
    cartPanel.style.display = 'none';
})


cartCross.addEventListener('click', function(){
    backdrop.style.display = 'none';
    cartPanel.style.display = 'none';
})


searchOpen.addEventListener('click', function(){
    searchPanel.style.display = 'block';
    backdrop.style.display = 'block';

})

searchCross.addEventListener('click', function(){
    backdrop.style.display = 'none';
    searchPanel.style.display = 'none';
})



//js for the help button

var help =document.querySelector('.help');

var minimizeHelp = document.querySelector('.neg-con');

var leaveAmsg = document.querySelector('.leave-a-message')

help.addEventListener('click', function(){
    leaveAmsg.style.display = 'block';
    help.style.display = 'none'
})

minimizeHelp.addEventListener('click', function(){
    leaveAmsg.style.display = 'none';
    help.style.display = 'block'
    
})

//js for the upload file section

var inputButton = document.querySelector('.input-button');

var fileUp = document.querySelector('#myFile');


inputButton.addEventListener('click',function(){
    fileUp.click() = true;
})


//mobile nav js goes here

var mobileNav = document.querySelector('.mobile-nav');

var mobileHam = document.querySelector('.mobile-ham-container');

var mobileNavCancel = document.querySelector('.mob-nav-cancel');





mobileHam.addEventListener('click', function(){
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
})

mobileNavCancel.addEventListener('click',function(){
    mobileNav.style.display = 'none';
    backdrop.style.display = 'none';
})




