<?php
    if (array_key_exists('name', $_POST)) {

       $to = 'info@obsady.net';

       $subject = 'Заполнена контактная форма с '.$_SERVER['HTTP_REFERER'];

       $subject = "=?utf-8?b?". base64_encode($subject) ."?=";

       $message = "Имя: ".$_POST['name']."\nPhone: ".$_POST['phone']."\nE-mail: ".$_POST['email'];
       $headers = 'Content-type: text/plain; charset="utf-8"';
       $headers .= "MIME-Version: 1.0\r\n";
       $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
       mail($to, $subject, $message, $headers);
    }
?>