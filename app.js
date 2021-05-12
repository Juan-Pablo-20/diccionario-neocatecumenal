$(document).ready(function () {
    $(".navResponsive").click(() => {
        $("header .barra").slideToggle();
    });

    document.querySelector(".fondoModal").style.height = window.screen.height + "px";

    const cabecera = document.querySelector(".cabecera");
    const barra = document.querySelector(".barra");

    window.addEventListener("scroll", () => {
        if (barra.clientWidth > 725) {
            if (window.scrollY > cabecera.clientHeight) {
                barra.style.animation = "colorNav1 1s both";
                barra.style.position = "fixed";
                barra.style.top = "0";
            } else {
                barra.style.animation = "colorNav2 1s both";
                barra.style.position = "relative";
            }
        }
    })
});