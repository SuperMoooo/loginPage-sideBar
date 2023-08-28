document.addEventListener('DOMContentLoaded', function (){

    const menuBtn = document.querySelector('.side-bar-menu img');
    const sideBar = document.querySelector('.side-bar');
    const menuCloseImg = '/icons/menu-close.png';
    const menuOpenImg = '/icons/menu.png';
    let checkMenu = 0;

    menuBtn.addEventListener('click', function (){
        if (checkMenu === 0){
            menuBtn.src = menuCloseImg;
            sideBar.classList.toggle('opened');
            checkMenu = 1;
        }else{
            menuBtn.src = menuOpenImg;
            sideBar.classList.toggle('opened');
            checkMenu = 0;
        }
        
    });



});