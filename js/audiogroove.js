$(document).ready(function() {
  // Ruta al archivo JSON
  var jsonFile = './js/sounds.json';

  // Variable para el audio actualmente en reproducción
  var audioActual = null;

  // Función para generar el contenido
  function generateContent(items, containerClass) {
    var container = $('.' + containerClass);

    items.forEach(function(item) {
      var card = $('<div class="card">' +
                        '<div class="card-img">' +
                          '<img src="' + item.image + '" alt="' + item.title + '">' +
                        '</div>' +
                        '<h2>' + item.title + '</h2>' +
                        '<p>' + item.description + '</p>' +
                        '<audio controls class="custom-audio">' +
                          '<source src="' + item.audio + '" type="audio/mp3">' +
                          'Tu navegador no soporta el elemento de audio.' +
                        '</audio>' +
                      '</div>');

      container.append(card);

      var audio = card.find('audio')[0];

      // Evento clic para reproducir el audio al hacer clic en la tarjeta
      card.on('click', function() {
        // Pausar el audio actual si existe
        if (audioActual && audioActual !== audio) {
          audioActual.pause();
        }

        // Pausar la reproducción automática del nuevo audio
        audio.autoplay = false;

        // Establecer el audio actual al nuevo audio
        audioActual = audio;

        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      });

      // Evento para pausar otros audios cuando se inicia uno nuevo
      audio.addEventListener('play', function() {
        if (audioActual && audioActual !== audio) {
          audioActual.pause();
        }
        audioActual = audio;
      });
    });
  }

  // Cargar el archivo JSON
  $.getJSON(jsonFile, function(data) {
    generateContent(data.international, 'container-card-sounds');
    
  });
});



