function validateForm(){
  var nombre = document.getElementById("name").value;
  var apellido = document.getElementById("lastname").value;
  var correo = document.getElementById("input-email").value;
  var clave = document.getElementById("input-password").value;
  var bicis = document.getElementsByClassName('form-control')[4];

  var bien = /^[A-Z]{1}[a-z]+$/; //Expresion reg: // abre y cierra, ^para inicio,[]caracter q debe tener,{}cuanto debe haber,+ aumenta, $busca en último.
  var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;// \w letras y numeros, []incluye.y-,
  var passw = /^\w{6,}$/; //{mínimo, maximo}

  if(!bien.test(nombre)){
    var mensaje="Debe iniciar con mayúscula cada palabra";
    dark(mensaje,"nombre");
  }
  else if(!bien.test(apellido)){
    var mensaje="Debe iniciar con mayúscula cada palabra";
    dark(mensaje,"apellido");
  }
  else if(!mail.test(correo)){
    var mensaje="Ingreso no válido";
    dark(mensaje,"email");
  }
  else if(!passw.test(clave) || clave === "password" || clave === "123456" || clave === "098754"){
     var mensaje="Su contraseña no es segura";
     dark(mensaje,"password");
  }
  else if(bicis.value == 0){
     var mensaje="Debe seleccionar una opción";
     dark(mensaje,"bici");
  }

  if(nombre.length!=0 && apellido.length!=0 && correo.length!=0 && clave.length!=0 && bicis.length!=0){
        var mensaje="Se ha registrado con éxito";
        dark(mensaje,"formulario");
       }
  else{
      var mensaje="Todos los campos son obligatorios";
      dark(mensaje,"formulario");
       }



function dark(mensaje,div){
  var cajita = document.getElementById(div);
  var alerta = document.createElement("span");
   alerta.innerText=mensaje;
    cajita.appendChild(alerta);
}
}
