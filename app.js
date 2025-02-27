// Array global para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo.
 * 1. Captura el valor del campo de entrada.
 * 2. Valida que el campo no esté vacío.
 * 3. Agrega el nombre al array y limpia el campo.
 * 4. Actualiza la lista visual.
 */
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  let inputAmigo = document.getElementById("amigo");
  let nombre = inputAmigo.value;
  
  // Validar la entrada
  if (nombre === '') {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombre);

  // Limpiar el campo de entrada
  inputAmigo.value = "";
  inputAmigo.focus();
  // Actualizar la lista visual
  actualizarLista();
}

/**
 * Función para actualizar la lista de amigos en el HTML.
 * 1. Obtiene el elemento de la lista.
 * 2. Limpia la lista existente.
 * 3. Recorre el array de amigos y crea un <li> para cada uno.
 */
function actualizarLista() {
  // Obtener el elemento de la lista
  let listaAmigos = document.getElementById('listaAmigos');

  // Limpiar la lista existente
  listaAmigos.innerHTML = "";

  // Iterar sobre el arreglo y agregar cada nombre como un elemento <li>
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

/**
 * Función para sortear un amigo aleatoriamente.
 * 1. Verifica que el array de amigos no esté vacío.
 * 2. Genera un índice aleatorio.
 * 3. Obtiene el nombre y actualiza el contenido del elemento de resultado.
 */
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  // Generar un índice aleatorio
  let amigoSorteado  = amigos[Math.floor(Math.random() * amigos.length)];

  // Mostrar el resultado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}