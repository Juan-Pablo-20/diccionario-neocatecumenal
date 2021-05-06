$(document).ready(function () {
    $(".navResponsive").click(() => {
        $("header .barra").slideToggle();
    })

    const boton = document.querySelector(".imprimir").addEventListener("click", () => {
        print();
    });

    var colores = [
        {
            color: "aquamarine",
            rgba: "127, 255, 212, 0.650"
        }, {
            color: "lightgreen",
            rgba: "144, 238, 144, 0.650"
        }, {
            color: "sandybrown",
            rgba: "244, 165, 96, 0.650"
        }, {
            color: "plum",
            rgba: "221, 160, 221, 0.650"
        },{
            color: "bisque",
            rgba: "255, 228, 196, 0.650",
        }, {
            color: "brown",
            rgba: "165, 42, 42, 0.650",
        }
    ]

    const azul = document.querySelector(".azulC");
    const verde = document.querySelector(".verdeC");
    const naranja = document.querySelector(".naranjaC");
    const lila = document.querySelector(".lilaC");
    const beige = document.querySelector(".beigeC");
    const brown = document.querySelector(".brownC");
    const enlacesA = document.getElementsByTagName("a");
    const barra = document.querySelector(".barra");
    const aside = document.querySelector(".asideC");
    const footer = document.querySelector(".footerC");
    const tituloAside = document.querySelector(".tituloAside2");
    const navResponsive = document.querySelector(".navResponsive");

    var colorBtns = [azul, verde, naranja, lila, beige, brown];
    var clase;

    var colorB = colores[5].color;
    var rgbaB = colores[5].rgba;

    for (let i = 0; i < colorBtns.length; i++) { //mejor hacer esto con este tipo de for
        colorBtns[i].addEventListener("click", () => {
            colorBtns[i].style.border = "1px solid gray";
            clase = colorBtns[i].classList[1];
            clase = parseInt(clase.substring(clase.length - 1, clase.length));
            colorB = colores[clase].color;
            barra.style.backgroundColor = colorB;
            rgbaB = colores[clase].rgba;
            aside.style.borderLeft = `10px solid ${colorB}`;
            tituloAside.style.borderBottom = `1px solid ${colorB}`;
            footer.style.backgroundColor = colorB;
            navResponsive.style.backgroundColor = colorB;
            if(clase === 5){
                document.body.style.backgroundColor = "rgb(223, 195, 159)";
                footer.style.color = "white";
                for(a of enlacesA){
                    a.style.color = "white";
                }
            } else {
                document.body.style.backgroundColor = `rgba(${rgbaB})`;
                footer.style.color = "rgb(70, 70, 70)";
                for(a of enlacesA){
                    a.style.color = "rgb(70, 70, 70)";
                }
            }
        })
    }

    window.addEventListener("scroll", () => {
        if (barra.clientWidth > 725) {
            if (window.scrollY > 2) {
                barra.style.backgroundColor = `rgba(${rgbaB})`;
                barra.style.top = "0";
            } else {
                barra.style.backgroundColor = colorB;
            }
        }
    });


});

