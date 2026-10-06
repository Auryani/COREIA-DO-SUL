

/* =========================
   MENU DO CELULAR
========================= */


function abrirMenu() {


    const menu = document.querySelector(".menu");


    menu.classList.toggle("ativo");


}




/* =========================
   FECHAR MENU AO CLICAR
========================= */


const linksMenu = document.querySelectorAll(".menu a");


linksMenu.forEach(function(link) {


    link.addEventListener("click", function() {


        const menu = document.querySelector(".menu");


        menu.classList.remove("ativo");


    });


});