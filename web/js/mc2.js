function test(){
	console.log("La fonction test de mc2.js a bien été lancée");
}

function myParallax(){
	$('.parallax').parallax();
}



$(document).ready(function() {
	myParallax();
    $('select').material_select();
	$('textarea').trigger('autoresize');
	$('.datepicker').pickadate({
		//selectMonths: true, // Creates a dropdown to control month
		selectYears: 15 // Creates a dropdown of 15 years to control year
	});
});
