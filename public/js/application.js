$(document).ready(function() {

	$('.my-repositories').on('click', function(e) {
		$('#repositories').css('display', 'inherit');
	});

	$('.my-following').on('click', function(e){
		$.get('https://api.github.com/users/jlbyrne/following').done( function(response) {
			$.each(response, function(i, v) {
				$('.following').append("<p>" + v.login + "</p>");
			});
		});
	});

	$('.my-avatar').on('click', function(e) {
		$.get('https://api.github.com/users/jlbyrne').done( function(response) {
			$('#avatar').html("<img src='" + response.avatar_url + "' alt='my avatar'>")
		});
	});
  
});
