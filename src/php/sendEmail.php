<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];

  $to = "raul.belloso.m@gmail.com";
  $subject = "Mensaje de contacto";
  $body = "Nombre: " . $name . "\n";
  $body .= "Email: " . $email . "\n";
  $body .= "Telefono: " . $phone . "\n";
  $body .= "Mensaje: " . $message . "\n";

  $headers = "From: " . $name . " <" . $email . ">\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";

  $success = mail($to, $subject, $body, $headers);

  if ($success) {
    echo "¡El mensaje se ha enviado correctamente!";
  } else {
    echo "Hubo un error al enviar el mensaje.";
  }
}
?>
