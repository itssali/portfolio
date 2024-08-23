<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "support@alinasser.info";
    $subject = "New Contact Form Submission from " . $name;
    $body = "Name: " . $name . "\nEmail: " . $email . "\n\nMessage:\n" . $message;
    $headers = "From: " . $email;
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Your message has been sent!";
    } else {
        echo "Something went wrong, please try again.";
    }
}
?>