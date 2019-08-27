
Thanks for your message!

<?php

	$userName 		= $_POST['myName'];
	$userEmail	 	= $_POST['myEmail'];
	$userMessage 		= $_POST['myMessage'];
	$to 			= "ar4477@nyu.edu";
	$subject 		= "Email from my website";
	$body 			= "Information Submitted:";
	$body .= "\r\n Name: " . $userName;
	$body .= "\r\n From: " . $userEmail;
	$body .= "\r\n Message: " . $userMessage;
	if ( mail($to, $subject, $body) ):
    echo("SUCCESS");
    header(esc_url(home_url('/')));
  else:
    echo("NO!");
  endif;
?>
