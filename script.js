// CONTADOR
let contador = 0;

function incrementar() {
  contador++;
  document.getElementById("numero").textContent = contador;
}


// FORMULARIO
let estadoNombre = "";

function mostrarNombre() {

  estadoNombre = document.getElementById("nombre").value;

  document.getElementById("resultado").textContent =
    "Hola " + estadoNombre;
}


// BOTÓN ACTIVO / INACTIVO
let activo = false;

function cambiarEstado() {

  activo = !activo;

  const boton = document.getElementById("botonEstado");

  if (activo) {

    boton.textContent = "Activo";
    boton.classList.remove("inactivo");
    boton.classList.add("activo");

  } else {

    boton.textContent = "Inactivo";
    boton.classList.remove("activo");
    boton.classList.add("inactivo");
  }
}
