$(document).ready(function () {
    $(".navResponsive").click(() => {
        $("header nav").slideToggle();
    })

    document.querySelector(".fondoModal").style.height = window.screen.height + "px";
});