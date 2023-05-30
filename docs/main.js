'use strict'

//NOMBRE//
let $nombres = document.getElementById('nombre');
$nombres.addEventListener('input', (e) =>{
  console.log(e.target.value);
});

//APELLIDO//
let apellidos = document.getElementById('apellido');
apellidos.addEventListener('input', (e) =>{
  console.log(e.target.value);
});

//DEPARTAMENTO//
// Obtén el elemento select por su ID
let departamento = document.getElementById('departamento');

// Función para imprimir la opción seleccionada
function imprimirOpcionSeleccionada() {
  // Obtén la opción seleccionada
  let opcionSeleccionada = departamento.options[departamento.selectedIndex];
  // Accede al valor y texto de la opción seleccionada
  let valorSeleccionado = opcionSeleccionada.value;
  let textoSeleccionado = opcionSeleccionada.text;
  // Imprime la opción seleccionada
  console.log('Opción seleccionada:', textoSeleccionado);
}
// Imprimir la opción seleccionada inicial
imprimirOpcionSeleccionada();
// Actualizar la opción seleccionada cuando cambie
departamento.addEventListener('change', function() {
  imprimirOpcionSeleccionada();
});

//CIUDAD//

let ciudad = document.getElementById('ciudad');
function obtenerCiudad() {
  let opcionSeleccionada = ciudad.options[ciudad.selectedIndex];
  let valorSeleccionado = opcionSeleccionada.value;
  let textoSeleccionado = opcionSeleccionada.text;

  console.log('Opción seleccionada:', textoSeleccionado);
}

obtenerCiudad();

ciudad.addEventListener('change', function() {
  obtenerCiudad();
});

//CELULAR//
let celular = document.getElementById('telefono');
telefono.addEventListener('input', (e) =>{
  console.log(e.target.value);
});

//CORREO ELECTRÓNICO//
let email = document.getElementById('correo');
email.addEventListener('input', (e) =>{
  console.log(e.target.value);
});

//SEXO//
let sexo = document.getElementById('sexo');
function obtenerSexo() {
  let opcionSeleccionada = sexo.options[sexo.selectedIndex];
  let valorSeleccionado = opcionSeleccionada.value;
  let textoSeleccionado = opcionSeleccionada.text;

  console.log('Opción seleccionada:', textoSeleccionado);
}

obtenerSexo();

sexo.addEventListener('change', function() {
  obtenerSexo();
});

//FECHA DE NACIMIENTO//
let dateInput = document.getElementById('date');
dateInput.addEventListener('input', (e) =>{
  console.log(e.target.value);
});

//TÉRMINOS Y CONDICIONES//
let privacidad = document.getElementById('aceptar');
privacidad.addEventListener('input', (e) =>{
  console.log(e.target.value);
});


//VALIDACIONES//

//VARIABLES/

  //2.0. NOMBRE//
let formulario = document.getElementById('myForm');
  formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    let regexText = /^[A-Za-z]+$/; //Validación que solo se pueden poner carácteres de la A a la Z//
    let entrada=false;

    if ($nombres.value.length < 3 || !regexText.test($nombres.value)){
      $nombres.style.borderColor = "red";
      $nombres.style.outline = "3px solid red";
      entrada=true;


        //2.1 APELLIDOS//
    } else{
      $nombres.style.borderColor = "blue";
      $nombres.style.outline = "3px solid blue";
    }

    if (apellidos.value.length < 3 || !regexText.test(apellidos.value)){
      apellidos.style.borderColor = "red";
      apellidos.style.outline = "3px solid red";
      entrada=true;

    } else{
      apellidos.style.borderColor = "blue";
      apellidos.style.outline = "3px solid blue";
    }

    //2.2 DEPARTAMENTO//
    
    if (departamento.value=="") {
      departamento.style.borderColor = "red"
      departamento.style.outline = "3px solid red";
      entrada= true;
    }
    else{
      departamento.style.borderColor = "blue"
      departamento.style.outline = "3px solid blue";
    }

    //2.3 MUNICIPIO// 
  
  if (ciudad.value=="") {
    ciudad.style.borderColor = "red"
    ciudad.style.outline = "3px solid red";
    entrada= true;
  }
  else{
    ciudad.style.borderColor = "blue"
    ciudad.style.outline = "3px solid blue";
  }

   //2.5 CELULAR//
   let regexNumber = /^\d{10}$/; //Validación que solo se pueden poner carácteres de la A a la Z//
  

   if (celular.value.length < 3 || !regexNumber.test(celular.value)){
     celular.style.borderColor = "red";
     celular.style.outline = "3px solid red";
     entrada=true;

   } else{
     celular.style.borderColor = "blue";
     celular.style.outline = "3px solid blue";
   }

    //2.6 EMAIL//

    let regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/; //Validación que solo se pueden poner carácteres de la A a la Z//
    

    if (email.value.length < 3 || !regexEmail.test(email.value)){
      email.style.borderColor = "red";
      email.style.outline = "3px solid red";
      entrada=true;

    } else{
      email.style.borderColor = "blue";
      email.style.outline = "3px solid blue";
    }

    //2.7 SEXO//
  if (sexo.value=="") {
    sexo.style.borderColor = "red"
    sexo.style.outline = "3px solid red";
    entrada= true;
  }
  else{
    sexo.style.borderColor = "blue"
    sexo.style.outline = "3px solid blue";
  }

  //2.8 FECHA NACIMIENTO//

  if (dateInput.value==""){
    dateInput.style.borderColor = "red";
    dateInput.style.outline = "3px solid red";
    entrada=true;

  } else{
    dateInput.style.borderColor = "blue";
    dateInput.style.outline = "3px solid blue";
  }

  //2.9 POLÍTICAS//

  if (privacidad.checked==""){
    privacidad.style.borderColor = "red";
    privacidad.style.outline = "3px solid red";
    entrada=true;

  } else{
    privacidad.style.borderColor = "blue";
    privacidad.style.outline = "3px solid blue";
  }

  if (entrada==true){
    alert('El formulario no está completo');

  }else{
      alert('Formulario enviado exitosamente')
    }

});

  
  
    


    
  