const menuBar = () => {
    let burger = document.getElementById("burger");
    let nav = document.querySelectorAll(".nav-links");
    burger.addEventListener("click",() => {
        // loop over since its a node collections of an array
        for(let i =0; i < nav.length; i++) {
             nav[i].classList.toggle('responsive');
        }

        burger.classList.toggle('toggle');
    })

}


menuBar()



/*
const navSlide =  () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navlinks = document.querySelectorAll('.nav-links li');
	
	burger.addEventListener('click', ()=>{ 
	//toggle nav
		nav.classList.toggle('nav-active');
		
		//animate links
	navlinks.forEach((link,index) =>{
		if (link.style.animation) {
			link.style.animation = ''
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`;
		}
	});
	//burger animation
	burger.classList.toggle('toggle');

});


}

navSlide();
