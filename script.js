$(document).ready(function() {
	// when the document is ready, add a listener to the form submission event
	$('#message-form').on('submit', function(event) {
		// prevent the default form submission behavior
		event.preventDefault();
		
		// get the values of the username and message fields
		var username = $('#username').val();
		var message = $('#message').val();
		
		// make an AJAX POST request to the server with the username and message data
		$.ajax({
			url: '/messages',
			type: 'POST',
			data: { username: username, message: message },
			success: function(response) {
				// if the server responds with a success message, add the new message to the messages list
				$('#messages').append('<li><strong>' + username + ':</strong> ' + message + '</li>');
				// clear the form fields
				$('#username').val('');
				$('#message').val('');
			},
			error: function(error) {
				// if the server
