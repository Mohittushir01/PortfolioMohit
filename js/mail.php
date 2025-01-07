<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['contactName'];
    $email = $_POST['contactEmail'];
    $subject = $_POST['contactSubject'];
    $message = $_POST['contactMessage'];

    // Email to send to
    $to = "mohittushhir099@gmail.com";
    
    // Email subject
    $email_subject = "New Contact Form Submission: " . $subject;
    
    // Email body content
    $email_body = "
    <html>
    <head>
        <title>New Contact Form Submission</title>
    </head>
    <body>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Subject:</strong> $subject</p>
        <p><strong>Message:</strong> <br>$message</p>
    </body>
    </html>
    ";
    
    // Headers for email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$email>" . "\r\n";

    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
