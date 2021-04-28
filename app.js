$(document).ready(function () {
    $(".navResponsive").click(() => {
        $("header nav").slideToggle();
    })

    const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const abecedario = document.querySelector(".abecedario");

    for(letra of abc){
        abecedario.innerHTML += `<div class=letras>${letra}</div>`;
    }
});