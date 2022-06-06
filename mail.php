<?php
header('Access-Control-Allow-Origin: *');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

error_reporting(-1);
ini_set('display_errors', 'Off');
set_error_handler("var_dump");

require_once './vendor/autoload.php';

$mail = new PHPMailer(true);

if ($_POST) {
	$name = htmlspecialchars(trim($_POST['name']));
	$email = htmlspecialchars(trim($_POST['email']));
	$message = htmlspecialchars(trim($_POST['message']));
	$errors = [];

	if (strlen($name) < 1) {
		$errors['name'] = 'First Name is required.';
	}

	if (strlen($email) < 1) {
		$errors['email'] = 'E-Mail Address is required.';
	} else {
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$errors['email'] = 'Please enter correct E-Mail Address.';
		}
	}

	if (strlen($message) < 1) {
		$errors['message'] = 'Message is required.';
	}

	if (count($errors) > 0) {
		echo json_encode([
			'type' => 'validation',
			'message' => $errors,
		]);

		return;
	}

	try {
		//Server settings
		$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
		$mail->isSMTP();                                            //Send using SMTP
		// 	$mail->SMTPOptions = array(
		// 		'ssl' => array(
		// 		'verify_peer' => false,
		// 		'verify_peer_name' => false,
		// 		'allow_self_signed' => true
		// 		)
		// );
		$mail->Host = 'smtp.office365.com';
		$mail->Port       = 587;
		$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
		$mail->SMTPAuth   = true;
		$mail->Username   = 'hello@kineticskunk.com';                     //SMTP username
		$mail->Password   = 'Nud03728';                               //SMTP password

		//Recipients
		$mail->setFrom('hello@kineticskunk.com', 'Kinetic Skunk');
		$mail->addAddress('hello@kineticskunk.com');               //Name is optional

		//Content
		$mail->isHTML(true);                                  //Set email format to HTML
		$mail->Subject = 'Web Inquiry';
		$mail->Body    = "<div>\n<strong>Sender Full Name: <span style='font-weight: 400;'>" . $name . "</span></strong> <br />\n<strong>Sender E-Mail: <span style='font-weight: 400;'>" . $email . "</span></strong> <br />\n<strong>Message: <span style='font-weight: 400;'>" . $message . "</span></strong> <br />\n</div>";

		$mail->send();
		echo json_encode([
			'type' => 'success',
		]);
	} catch (Exception $e) {
		echo json_encode([
			'type' => 'error',
		]);
	}
}