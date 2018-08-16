<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$model = $_POST['model'];
$form = $_POST['form'];

// Формирование заголовка письма
$subject  = "Новая заявка";
// Формирование тела письма
$msg = "Здравствуйте.\r\n";
$msg .= "Получена новая заявка\r\n\r\n";
$msg .= "Данные:\r\n\r\n";
$msg .= "Форма: ".$form."\r\n";
$msg .= "Телефон: ".$phone."\r\n";

if($_POST['name'] != "") {
	$msg .= "Имя - ".$name."\r\n";
}

if($_POST['model'] != "") {
	$msg .= "Модель и год автомобиля - ".$model."\r\n";
}

$headers = "From: admin\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .="Content-type:text/plain; charset = utf-8\r\n";

// отправка сообщения
if($_POST['form'] != "") {
    $verify = mail ("kudrlalexey@gmail.com", $subject, $msg, $headers);
}
?>