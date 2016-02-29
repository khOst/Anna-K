$(document).ready(function() {
	//Carousel
	$("#owl-example").owlCarousel();

	//Form submit
	$("#form").submit(function(event) {

		var mail = document.getElementById("mail").value;
		var mailJSON = JSON.stringify(mail);

		alert("Thanks for subscribing. We will notify you on " + mailJSON);
		event.preventDefault();
	});
	
});