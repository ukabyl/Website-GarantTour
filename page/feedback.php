<?php

$site = "Garant Tour";
$senderMail = "garant.tour.noreply@gmail.com";   
$senderMailPass = "123456garanttour";
$adminMail = "umkabylbekov@gmail.com";

if((isset($_POST['name'])&&$_POST['name']!="") && (isset($_POST['phone'])&&$_POST['phone']!=""))

{ //Проверка отправилось ли наше поля name и не пустые ли они

//    date_default_timezone_set("Europe/Moscow");

    require 'mail/PHPMailerAutoload.php';

    $mail = new PHPMailer(); // инициализация класса

    $mail->CharSet = 'UTF-8';
    $mail->isSMTP(); // указали, что работаем по протоколу SMTP
    $mail->SMTPDebug = 2;
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "ssl";

    $mail->Host = "smtp.gmail.com";
    $mail->Port = "465"; // порт SMTP

    $mail->Username = $senderMail;
    $mail->Password = $senderMailPass;

    $mail->setFrom($senderMail, $site); // от кого
    $mail->addReplyTo($adminMail, $site); // кому ответить
    $mail->addAddress($adminMail);  // получатель

    $mail->Subject = "Заявка с сайта"; // тема письма (заголовок)

    //Текст нащего сообщения можно использовать HTML теги
    $message =
        '<p>Имя: '.$_POST['name'].'</p>'.
        '<p>Телефон: '.$_POST['phone'].'</p>';

    $mail->msgHTML($message); // текст сообщения

    if ($mail->send()) {
        echo "OK";
    }
    else {
        echo "ERROR";
    }

}



