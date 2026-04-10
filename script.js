// Ejemplo simple de cambio de estado
const btn = document.getElementById("btn");
const estado = document.getElementById("estado");

let activo = false;

btn.addEventListener("click", () => {
  activo = !activo;
  estado.textContent = `Estado actual: ${activo ? "Activo" : "Inactivo"}`;
});

// Ejemplo de contador
const incrementar = document.getElementById("incrementar");
const decrementar = document.getElementById("decrementar");
const valor = document.getElementById("valor");

let contador = 0;

incrementar.addEventListener("click", () => {
  contador++;
  valor.textContent = `Valor: ${contador}`;
});

decrementar.addEventListener("click", () => {
  contador--;
  valor.textContent = `Valor: ${contador}`;
});
