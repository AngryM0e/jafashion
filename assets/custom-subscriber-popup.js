const newsletter__modal = document.getElementById("customNewsletter");
const newsletter__close = document.querySelectorAll(".popupNewsletter__close");
const modalBody = document.getElementsByTagName("body")[0];
newsletter__close.forEach(element => {
	element.addEventListener("click", () => {
		newsletter__modal.style.display = "none";
		modalBody.classList.remove('custom__newsletter-open');
		modalBody.classList.add('custom__newsletter-close');
	});
});

// document.addEventListener('DOMContentLoaded', function () {
// 	document.getElementById('CloseButton').addEventListener('click', function () {
// 		document.getElementById('customNewsletter').style.display = 'none';
// 	});
// });

// const newsletter__modal = document.getElementById("customNewsletter");

// const newsletter__close = document.getElementById("customNewsletter__close");

// newsletter__close.addEventListener("click", () => {
// 	newsletter__modal.style.display = "none";
// });
