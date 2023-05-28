(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);




if (homeButton && mainView && home) {
    homeButton.addEventListener('click', function () {
        console.log("hello2");
        setActiveDiv("home");
    })
}

if (creditCardButton && mainView && home) {
    creditCardButton.addEventListener('click', function () {
        console.log("hello3");
        setActiveDiv("creditCard");
    })
}

function toggleForm() {
	var form = document.getElementById("credit-card-form");
	if (form.style.display === "none") {
	  form.style.display = "block";
	} else {
	  form.style.display = "none";
	}
  }function submitForm(event) {
	event.preventDefault();
	alert("Successfully Submitted!");
	
	document.getElementById("credit-card-form").reset();
  }
