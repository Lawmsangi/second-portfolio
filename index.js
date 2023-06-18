let btn = document.getElementById('logo');
let menu = document.getElementById('mobile-menu');
let close = document.getElementById('mobile-menu-close');

btn.addEventListener('click', function(e){
    menu.style.display = 'block';
    document.body.style.overflow = 'hidden';
})
function closeMenu(){
    menu.style.display = 'none';
    document.body.style.overflow = 'scroll';
}
close.addEventListener('click', closeMenu())  

menu.addEventListener('click', function(e){
    menu.style.display = 'none';
    document.body.style.overflow = 'scroll';
})  