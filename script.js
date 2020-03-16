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
//buttons for shuffle partfolio
let buttonsGallery = document.querySelectorAll('.gallery-menu a');
let blocksImages = document.querySelectorAll('.gallery-item');
for(let btn of buttonsGallery){
    btn.addEventListener('click', shakeImg);
}


function shakeImg(e) {
    e.preventDefault();
    let target = e.target.closest('a');
    if(e.target.closest('.active-gallery')) return;
    if(!target) return;
    if(!e.target.closest('.active-gallery')){
        for (let item of buttonsGallery) {
            item.classList.remove('active-gallery');
        }
        target.classList.add('active-gallery');
    }
    let images = document.querySelector('.gallery-wrapper');
    let shakePartfolioPhoto = document.createElement('div');
    shakePartfolioPhoto.className = 'gallery-wrapper';
    let arrPartfolio = Array.from(blocksImages);
    for (let i = arrPartfolio.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        const temp = arrPartfolio[j]
        arrPartfolio[j] = arrPartfolio[i]
        arrPartfolio[i] = temp
    }
    for (let item of arrPartfolio) {
        shakePartfolioPhoto.insertAdjacentElement('beforeend',item);
    }
    
    images.replaceWith(shakePartfolioPhoto);
    //console.log(arrPartfolio);
}
//border for images
let blockImages = document.querySelector('.gallery-wrapper');
let arrImages = document.querySelectorAll('.gallery-item img');
for(let one of arrImages){
    one.addEventListener('click', borderForImages);
}
function borderForImages(e){
    let target = e.target.closest('img');
    if(!target) return;
    if(!target.closest('.active-img')){
        /*for(let item of arrImages){
            item.classList.remove('active-img');
        }*/
        arrImages.forEach(item => {
            item.classList.remove('active-img');
        });
        target.className = 'active-img';
    }
    //console.log(target);
    console.log(blockImages);
}
//form submit
let btnOk = document.querySelector('.btn-sub ');
let msqWrap = document.querySelector('.msg-wrap');
let theme = document.querySelector('.theme');
let textDiscr = document.querySelector('.discript');
let form = document.querySelector('.form-item form');
let btnSub = form.elements.send;
console.log(btnSub);
btnSub.addEventListener('click', sendMessage);
function sendMessage (e) {
    e.preventDefault();
    let userName = form.elements.user;
    let userMail = form.elements.email;
    let subject = form.elements.subject;
    let description = form.elements.describe;
    let subjectValue = '';
    let describeValue = '';
    if (userName.validity.valueMissing || userMail.validity.valueMissing) return;
    if (subject.value) {
        subjectValue = `Subject: ${subject.value}`;
    } else {
        subjectValue = `Without subject`;
    };

    if (description.value) {
        describeValue = `Description: ${description.value}`;
    } else {
        describeValue = `Without description`;
    }
    theme.insertAdjacentText('beforeend', subjectValue);
    textDiscr.insertAdjacentText('beforeend', describeValue);
    msqWrap.classList.remove('msg-hidden');

    //console.log(userMail);
}
btnOk.addEventListener('click', closeMessage);
function closeMessage (e) {
    theme.innerHTML ='';
    textDiscr.innerHTML ='';
    form.reset();
    msqWrap.classList.add('msg-hidden');
}