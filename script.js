$(document).ready(function() {
	// when the document is ready, add a listener to the form submission event
	$('#message-form').on('submit', function(event) {
		// prevent the default form submission behavior
		event.preventDefault();
		
		// get the values of the username and message fields
		var username = $('#username
                     
