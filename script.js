const menuBar = () => {
    let burger = document.getElementById("burger");
    let nav = document.querySelectorAll(".nav-links");
    burger.addEventListener("click",() => {
        // loop over since its a node collection of an array
        for(let i =0; i < nav.length; i++) {
             nav[i].classList.toggle('responsive');
        }
    })

}

menuBar()

//burger.classList.toggle('toggle');

