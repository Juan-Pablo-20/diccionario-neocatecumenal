$(document).ready(function () {
    $(".navResponsive").click(() => {
        $("header nav").slideToggle();
    })

    document.querySelector(".fondoModal").style.height = window.screen.height + "px";

    const cabecera = document.querySelector(".cabecera");
    const barra = document.querySelector(".barra");

    window.addEventListener("scroll", () => {
        if (barra.clientWidth > 725) {
            if (window.scrollY > cabecera.clientHeight) {
                barra.style.backgroundColor = "rgba(165, 42, 42, 0.700)";
                barra.style.position = "fixed";
                barra.style.top = "0";
            } else {
                barra.style.backgroundColor = "brown";
                barra.style.position = "relative";
            }
        }
    })
});