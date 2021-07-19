//Variables
let box = document.querySelector(".email_box");
let sendBtn = document.querySelector('.email_box_button-enviar')
let nameBox = document.querySelector('#name')
let emailBox = document.querySelector('#email')
let textareaBox = document.querySelector('#textarea')
let loader = document.querySelector('.email_box_loader')

let activarButton;
let nombreOk, emailOk, mensajeOk;

//EventListeners

eventListeners();

function eventListeners() {
  box.addEventListener("blur", verificaEscritura, true);
  box.addEventListener("click", limpiarDatos)
  sendBtn.addEventListener("click", enviarDatos)
}

//Funciones

function verificaEscritura(e) {
    console.log("hicicste blur"); 
    

  if (e.target.classList.contains("inputs")) {
    
    //Nombre
    if (e.target.type == "text") {
      verificarNombre(e);
    }

    //email
    if (e.target.type == "email") {
        verificarEmail(e);
    }
    //Mensaje TextArea
    if (e.target.localName == 'textarea') {
        //console.log("jaja");
        verificarMensaje(e);
    }
  }
}

function verificarNombre(e) {
  let nombre = e.target;
  //console.log(nombreInput);

  if (!nombre.value) {
    console.log("vacio");

    //Si esta vacio
    redStatus(nombre);
  } else if (nombre.value) {
    //Todo ok!
    greenStatus(nombre);
    nombreOk = true;
    sendBtnON()
  }
}

function verificarEmail(e) {
  let email = e.target;
  //console.log(nombreInput);

  if (!email.value) {
    console.log("vacio1");

    //Si esta vacio
    redStatus(email);

  } else if (email.value && email.value.indexOf("@") == -1) {
      console.log("no tiene @");
    //Si no tiene @
    redStatus(email);
  } else if (email.value && email.value.indexOf("@") != -1){
    console.log("SI tiene @");
    //Todo ok!
    greenStatus(email);  
    emailOk = true;
    sendBtnON()

  }
}

function verificarMensaje(e) {
    let mensaje = e.target;
    //console.log(nombreInput);
  
    if (!mensaje.value) {
      console.log("mensaje vacio");
  
      //Si esta vacio
      redStatus(mensaje);
    } else if (mensaje.value) {
    //Todo ok!
    greenStatus(mensaje);
    mensajeOk = true;
    sendBtnON()

    }
  }



function greenStatus(nombre){
    quitarRojo(nombre);
    añadirVerde(nombre);
}

function redStatus(nombre) {
  quitarVerde(nombre);
  añadirRojo(nombre);
}

function quitarVerde(input) {
  input.classList.remove("border-b-8");
  input.classList.remove("border-green-600");
}
function añadirRojo(input) {
  input.classList.add("border-b-8");
  input.classList.add("border-red-600");
}
function quitarRojo(input) {
  input.classList.remove("border-b-8");
  input.classList.remove("border-red-600");
}
function añadirVerde(input) {
  input.classList.add("border-b-8");
  input.classList.add("border-green-600");
}

function sendBtnON(){
    if (nombreOk==true && emailOk==true && mensajeOk==true) {
        console.log("todo ok :)!");
        console.log(sendBtn);
        sendBtn.disabled = false;
    }
}

function limpiarDatos(e){
    if (e.target.classList.contains("email_box_button-limpiar")) {
        //console.log("limpiar");

        //console.log(nameBox.value);

        cleanAll()

    }
}

function cleanAll() {
    nameBox.value = "";
        emailBox.value = "";
        textareaBox.value = "";

        nameBox.classList.remove('border-b-8')
        emailBox.classList.remove('border-b-8')
        textareaBox.classList.remove('border-b-8')

        loader.src =''
}

function enviarDatos(e){
    //e.preventDefault()
    console.log("Mensaje enviado");
    //console.log(loader);
    loader.src ='img/Spinner-1.4s-200px (1).svg'

    setTimeout(function(){
        loader.src ='img/check.svg'
        console.log("3 fuera");
        
        setTimeout(function(){
            cleanAll()
        console.log("3 dentro");
            
        },3000)

    },3000)

    

}

//src="img/Spinner-1.4s-200px (1).svg"
//src="img/check.svg"