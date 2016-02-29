	$(document).ready(function() {
		//Carousel
		$("#owl-example").owlCarousel();

		//Form validation
		$("#form").submit(function(event) {
			var mail = document.getElementById("mail").value;
			var obj = {
				"email": mail
			}
			var mailJSON = JSON.stringify(mail);
			alert("Thanks for subscribing, " + mailJSON);
			event.preventDefault();
		});
	});