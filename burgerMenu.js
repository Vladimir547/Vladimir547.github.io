window.onload = function(){
    let burger = document.querySelector('.burger-menu');
    let logo = document.querySelector('.logo')
    let menu = document.querySelector('.menu');
    burger.addEventListener('click', () =>{
        if(burger.closest('.close-menu')){
            hideM();
        } else {
            showM();
        }
    });
    let overflowMenu= document.createElement('div');
    document.onkeydown = function(event){
        if(event.code =='KeyM') showM();
        if(event.code =='Escape') hideM();
    }
    function showM(e){
        menu.style.display= 'flex';
        burger.classList.add('close-menu');
        logo.classList.add('logo-open');
        overflowMenu.className= "overflow";
        document.body.append(overflowMenu);
    }
    function hideM(e){
        overflowMenu.remove();
        menu.style.display= 'none';
        logo.classList.remove('logo-open');
        burger.classList.remove('close-menu');
    }
    overflowMenu.addEventListener('click', hideM);
}