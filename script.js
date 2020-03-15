//menu
let menuList = document.querySelector('.menu');
let menuItems = menuList.querySelectorAll('a')
menuList.addEventListener('click', addClassMenu);
function addClassMenu(e) {
    let target = e.target.closest('a');
    if (!target) {
        return;
    }
    menuItems.forEach(el => el.classList.remove('menuActive'));
    //console.log(target);
    target.classList.add('menuActive');
}

//dsiplay off
let phones = document.querySelectorAll(".phones")
for (let phone of phones) phone.addEventListener("click", togglePhone);

function togglePhone(e) {
    if (e.target.classList.contains("iphone")) {
        e.target.nextElementSibling.classList.toggle("hide");
    } else if (e.target.classList.contains("shadow")) {
        return
    } else {
        e.target.classList.toggle("hide");
    }
}

let buttonsGallery = document.querySelectorAll('.gallery-menu a');
for(let btn of buttonsGallery){
    btn.addEventListener('click', shakeImg);
}


function shakeImg(e) {
    e.preventDefault();
}