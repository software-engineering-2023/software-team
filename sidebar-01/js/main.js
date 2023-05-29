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
	event.preventDefault(); // prevent the default form submission behavior
  
	var nameInput = document.querySelector('#name');
	var natidInput = document.querySelector('#natid');
	var accnoInput = document.querySelector('#accno');
	var cardTypeInputs = document.querySelectorAll('input[name="card-type"]');
	
	// Check if all fields are filled
	if (!nameInput.value || !natidInput.value || !getSelectedCardType(cardTypeInputs)) {
	  alert("Please fill in all required fields.");
	  return;
	}
  
	// Submit the form
	var formElement = document.querySelector('#credit-card-form');
	formElement.submit();
  
	// Show success message
	var successMessage = "Successfully submitted!";
	alert(successMessage);
  }
  
  function getSelectedCardType(cardTypeInputs) {
	for (var i = 0; i < cardTypeInputs.length; i++) {
	  if (cardTypeInputs[i].checked) {
		return cardTypeInputs[i].value;
	  }
	}
	return null;
  }
