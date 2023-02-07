let burgerMenu = document.getElementById("header__burger");
if(burgerMenu) {
    burgerMenu.addEventListener("click", addClassToBody);
}

function addClassToBody() {
    document.querySelector("body").classList.toggle("menu-open");
}
