// Se obtiene el elemento de audio por su id
let miAudio = document.getElementById("miAudio");

// Establece el volumen inicial (por ejemplo, 0.3 para el 30% del volumen)
miAudio.volume = 0.3;

//Los elementos del html, sean id, class u otros atributos, para trabajarlos con JS
const audioElement = document.getElementById("miAudio");
const sourceElement = document.getElementById("misAudios");
const temaAnteriorButton = document.getElementById("temaAnterior");
const temaSiguienteButton = document.getElementById("temaSiguiente");

// Lista de temas
const temas = [
    "audio/Fugazi-Waiting-room.mp3",
    "audio/Brian-Jonestown-Massacre-Straight-Up-And-Down.mp3",
    "audio/Rage-against-the-machine-Killing-in-the-Name.mp3",
    "audio/Alice-In-Chains-Got-Me-Wrong.mp3",
    "audio/Sonic-Youth-Spleepin-Around.m4a",
    "audio/TOOL-Schism.mp3",
    "audio/Everlasting.mp3",    
    "audio/Joy-Division-Interzone.mp3",
    "audio/Branches Bones.mp3",
    "audio/Joy-Division-Wilderness.mp3",
    
    // Se pueden agregar mas tal como estan esos diez
];
// Inicializamos el índice del tema actual en 0, luego puede cambiar su valor a medida que avanza el programa.

let indiceTemaActual = 0;

// Función para cargar y reproducir el tema actual
function cargarTemaActual() {
    sourceElement.src = temas[indiceTemaActual];
    audioElement.load();
    audioElement.play();
}

// Manejar el evento 'ended' para reproducir automáticamente el siguiente tema
audioElement.addEventListener("ended", function() {
    indiceTemaActual = (indiceTemaActual + 1) % temas.length;
    cargarTemaActual();
});

// Manejar clic en botón de tema anterior
temaAnteriorButton.addEventListener("click", function() {
    indiceTemaActual = (indiceTemaActual - 1 + temas.length) % temas.length;
    cargarTemaActual();
});

// Manejar clic en botón de tema siguiente
temaSiguienteButton.addEventListener("click", function() {
    indiceTemaActual = (indiceTemaActual + 1) % temas.length;
    cargarTemaActual();
});

// Cargar el primer tema al cargar la página
cargarTemaActual();