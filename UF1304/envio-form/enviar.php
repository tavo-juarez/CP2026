<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $nombre = htmlspecialchars($_POST["nombre"]);
    $apellido = htmlspecialchars($_POST["apellido"]);
    $email = htmlspecialchars($_POST["email"]);
    $asunto = htmlspecialchars($_POST["asunto"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    $para = "juarezs.gustavo@gmail.com"; //Cambia por tu dirección de email

    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Apellido: $apellido\n";
    $cuerpo .= "Email: $email\n\n";
    $cuerpo .= "Asunto: $asunto\n\n";
    $cuerpo .= "Mensaje: \n$mensaje";

    $cabeceras = "From: $email" . "\r\n" . 
                  "Reply-To: $email" . "\r\n" . 
                  "X-Mailer: PHP/" . phpversion();
    
                  
    if (mail($para, $asunto, $cuerpo, $cabeceras)){
        header("Location: gracias.html");
    }else{
        header("Location: error.html");
    }
}

?>