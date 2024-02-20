const body = document.querySelector("body");
const burgerMenu = document.querySelector("#burger-menu");
const mobileNavigationMenu = document.querySelector("#mobile-navigation-menu");
const mobileNavigationMenuLinks = document.querySelectorAll("#mobile-navigation-menu a");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    mobileNavigationMenu.classList.toggle("active");
    body.classList.toggle("no-scroll");
});

mobileNavigationMenuLinks.forEach(function (mobileNavigationMenuLink) {
    mobileNavigationMenuLink.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
        mobileNavigationMenu.classList.remove("active");
        body.classList.remove("no-scroll");
    });
});
