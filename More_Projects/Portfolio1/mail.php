<!-- php script start here for form submittion -->

<?php 

    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

if(!empty($email)) {
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $receiver = "mohittushir099@gmail.com";
        $subject = "From: $name <$email>";
        $body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";
        $sender = "From: $email";

        if(mail($receiver, $subject, $body, $sender)){
            echo "Your Message has been sent";
        }else{
            echo "Failed to send message";
        }
    }else{
        echo "Please enter a valid email";
    }
}else{
    echo "Email is Required";
}

?>
