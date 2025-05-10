document.addEventListener("DOMContentLoaded", function(){

document.getElementById("boton").addEventListener("click",function(){

   
         let cookie = document.getElementById('cookie');
         let boton = document.getElementById('boton');
     
        cookie.style.display = 'none';
    });
});

function validarFormulario() {
    let nombre = document.getElementById('nombre').value.trim();
    let email = document.getElementById('email').value.trim();
    let telefono = document.getElementById('telefono').value.trim();
    let comentarios = document.getElementById('comentarios').value.trim();

    let caracter = /^[^0-9$@#][^$@#]*$/;

    if (nombre === "") {
        alert("El campo 'Nombre completo' no puede estar vacío.");
        return false;
    }
    if (!caracter.test(nombre)) {
        alert("El campo 'Nombre completo' no puede contener caracteres especiales ($, @, #) ni comenzar con un número.");
        return false;
    }

    if (email === "") {
        alert("El campo 'Correo electrónico' no puede estar vacío.");
        return false;
    }
    if (caracter.test(email)) {
        alert("El campo 'Correo electrónico' debe contener caracteres especiales ( @) y no comenzar con un número.");
        return true;
    }

    if (telefono === "") {
        alert("El campo 'Teléfono' no puede estar vacío.");
        return false;
    }
    if (caracter.test(telefono)) {
        alert("El campo 'Teléfono' no puede contener caracteres especiales ($, @, #) ni comenzar con un número.");
        return false;
    }

    if (comentarios === "") {
        alert("El campo 'Comentarios o preguntas adicionales' no puede estar vacío.");
        return false;
    }
    if (!caracter.test(comentarios)) {
        alert("El campo 'Comentarios o preguntas adicionales' no puede contener caracteres especiales ($, @, #) ni comenzar con un número.");
        return false;
    }

    return true;
}