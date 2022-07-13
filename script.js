// Imagens do meu carrocel de promcoes
let slides = [
	{
		img: "img/Banner1.webp",
	},
	{
		img: "img/Banner2.jpg",
	},
	{
		img: "img/Banner3.webp",
	},
	{
		img: "img/Banner4.webp",
	},
];
// Imagens do meu carrocel de promcoes

// Varre o meu array de objetos e pega cada item
slides.forEach((slide) => {
	// console.log(slide);
	creatSlide(slide);
});
// Varre o meu array de objetos e pega cada item

// Cria slides do carrosel
function creatSlide(slide) {
	// Elemento onde eu quero adicionar tags
	let wrapper = document.querySelector(".swiper-wrapper");

	// Criar elementos para serem introduzidos
	let creatSlide = document.createElement("div");
	let creatSlideImage = document.createElement("img");

	// Adicionando classe
	creatSlide.classList.add("swiper-slide");
	creatSlideImage.classList.add("img");

	// Adicionando valor no elemento criado
	creatSlideImage.src = slide.img;

	// Adicionando no local desejado
	wrapper.appendChild(creatSlide);
	creatSlide.appendChild(creatSlideImage);
}
// Cria slides do carrosel

//  inicializando o carrosel de promocoes
var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
//  inicializando o carrosel de promocoes

/* Mostra o menu ao clicar no icone hamburguer */
let btn_mobile = document.querySelector("#btn-mobile");
let hamburguer = document.querySelector("#hamburguer");
let nav = document.querySelector("#nav");

btn_mobile.addEventListener("click", () => {
	if (btn_mobile.classList.toggle("active")) {
		nav.classList.toggle("active");
	} else {
		nav.classList.remove("active");
	}
});
/* Mostra o menu ao clicar no icone hamburguer */

/* Esconde os itens de menu ao clicar em um item da lista */
let menuItens = document.querySelectorAll("#menu a");

menuItens.forEach((item) => {
	item.addEventListener("click", (e) => {
		if (e.returnValue == true) {
			nav.classList.remove("active");
		}
	});
});
/* Esconde os itens de menu ao clicar em um item da lista */
