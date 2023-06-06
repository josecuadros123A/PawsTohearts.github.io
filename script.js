// Obtener referencia a los elementos de la página
const donateButton = document.getElementById('donateButton');
const closeButton = document.getElementById('closeButton');
const donateBox = document.getElementById('donateBox');

// Agregar evento de clic al botón "Donar"
donateButton.addEventListener('click', () => {
  donateBox.style.display = 'block'; // Mostrar la caja de donación
});

// Agregar evento de clic al botón "Cerrar"
closeButton.addEventListener('click', () => {
  donateBox.style.display = 'none'; // Ocultar la caja de donación
});

// Agregar animación al título
const title = document.querySelector('.title');

// Función para aplicar animación al título
function animateTitle() {
  title.style.animation = 'pulse 2s infinite';
}

// Llamar a la función para iniciar la animación
animateTitle();
