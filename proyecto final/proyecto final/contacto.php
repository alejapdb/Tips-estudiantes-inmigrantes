<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $conociste = $_POST['conociste'];
    $comentarios = $_POST['comentarios'];
    $servicios1 =$_POST ['alojamiento'];
    $servicios2 =$_POST ['tramites'];
    $servicios3 =$_POST ['trabajo'];
    $servicios4 =$_POST ['ocio'];
    $servicios4 =$_POST ['transporte'];

    $destinatario = "alejapdb@gmail.com"; 
    $asunto = "Nuevo mensaje de contacto de $nombre";

    $mensaje = "Nombre: $nombre\n";
    $mensaje = "Correo electrónico: $email\n";
    $mensaje = "Teléfono: $telefono\n";
    $mensaje = "¿Cómo nos conociste?: $conociste\n";
    $mensaje = "Servicios de interés: $serviciosInteres\n";
    $mensaje = "¿Eres estudiante internacional?: $estudianteInternacional\n";
    $mensaje = "Comentarios o preguntas adicionales:\n$comentarios\n";

 
    mail($destinatario,$asunto,utf8_decode($mensaje),$email);

    echo("Los datos se han enviado correctamente");


}
?>