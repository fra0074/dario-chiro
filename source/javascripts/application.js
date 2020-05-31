//= require jquery
//= require popper
//= require bootstrap-sprockets
//= require navbar_scroll
//= require_tree .



window.addEventListener('resize', function(event){
    // console.log(event);
    // console.log("ciao mamma");
    // console.log(window.innerWidth);
    const burger = document.getElementById("burger");
    
    if ((window.innerWidth <= 1040) && (!burger)) {
        const container = document.querySelector(".container-navbar");
        container.insertAdjacentHTML("beforeend",`<i id="burger" class="fa fa-bars"></i>`)
    } else if ((window.innerWidth > 1040) && (burger)) {
        burger.remove();
    }

  });