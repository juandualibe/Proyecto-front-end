let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// Variable para el slide activo
let active = 4;

// Función para cargar y mostrar el efecto
function loadShow() {
  let stt = 0;

  // Configuración del slide activo
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = 'none';
  items[active].style.opacity = 1;

  // Configuración de los slides siguientes
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }

  // Configuración de los slides anteriores
  stt = 0;
  for (var i = active - 1; i >= 0 && i < items.length; i--) {
    stt++;
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = 'blur(5px)';
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}

// Llama a loadShow para cargar el carrusel inicialmente
loadShow();

// Configura los eventos de los botones de siguiente y anterior
next.onclick = function() {
  active = active + 1 < items.length ? active + 1 : 0; // Si llega al final, vuelve al principio
  loadShow();
}

prev.onclick = function() {
  active = active - 1 >= 0 ? active - 1 : items.length - 1; // Si está en el principio, retrocede al final
  loadShow();
}