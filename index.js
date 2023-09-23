document.querySelector("#hamburger").addEventListener("click", () => {
    document.querySelector("#hamburger").style.display = "none";
    document.querySelector("#close").style.display = "block";
    document.querySelector("#header").style.background = "black";
    document.querySelector("#intro").style.display = "none";
    document.querySelector(".menu-items").style.display = "flex";
});

document.querySelector("#close").addEventListener("click", () => {
    document.querySelector("#hamburger").style.display = "block";
    document.querySelector("#close").style.display = "none";
    document.querySelector("#header").style.background = "no-repeat center center / cover url(images/desktop/image-hero.jpg)";
    document.querySelector("#intro").style.display = "block";
    document.querySelector(".menu-items").style.display = "none";
});