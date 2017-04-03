function validateForm(){
  var nombre = document.getElementById("name").value;
  var apellido = document.getElementById("lastname").value;
  var correo = document.getElementById("input-email").value;
  var clave = document.getElementById("input-password").value;
  var bicis = document.getElementsByClassName('form-control')[4];

  var bien = /^[A-Z]{1}[a-z]+$/; //Expresion reg: // abre y cierra, ^para inicio,[]caracter q debe tener,{}cuanto debe haber,+ aumenta, $busca en último.
  var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;// \w letras y numeros, []incluye.y-,
  var passw = /^\w{6,}$/; //{mínimo, maximo}

  if(nombre.length=0 && apellido.length=0 && correo.length=0 && clave.length=0 && bicis.length=0){
    alert("todos los campos son obligatorios");
  }
  if(!bien.test(nombre) || !bien.test(apellido)){
    alert("Iniciar con mayúscula cada palabra");
  }
  else if(!mail.test(correo)){
    alert("Ingreso no válido");
  }
  else if(!passw.test(clave) || clave === "password" || clave === "123456" || clave === "098754"){
    alert("Su contraseña no es segura");
  }
  else if(bicis.value == 0){
    alert("Debe seleccionar una opción");
  }
  else{
    alert("Se ha registrado con éxito");
  }

}
