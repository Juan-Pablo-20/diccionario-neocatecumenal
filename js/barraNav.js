$(document).ready(function () {
    $(".navResponsive").click(() => {
        $("header .barra").slideToggle();
    })

    const barra = document.querySelector(".barra");

    window.addEventListener("scroll", () => {
        if (barra.clientWidth > 725) {
            if (window.scrollY > 2) {
                barra.style.backgroundColor = "rgba(165, 42, 42, 0.700)";
                barra.style.top = "0";
            } else {
                barra.style.backgroundColor = "brown";
            }
        }
    })

    const boton = document.querySelector(".imprimir").addEventListener("click", () => {
        print();
    });
});

