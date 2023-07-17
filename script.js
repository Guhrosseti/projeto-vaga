var video = document.getElementById('video');
var playPauseButton = document.getElementById('play-pause-button');
var videoOptions = document.getElementById('video-options');

// Função para reproduzir ou pausar o vídeo
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseButton.textContent = 'Pausar';
  } else {
    video.pause();
    playPauseButton.textContent = 'Continuar';
  }
}

// Evento de clique no botão de reproduzir/pausar
playPauseButton.addEventListener('click', togglePlayPause);

// Evento de alteração de opções de vídeo
videoOptions.addEventListener('change', function() {
  var selectedVideo = document.querySelector('input[name="video"]:checked').value;
  video.src = selectedVideo;
  video.play();
  playPauseButton.textContent = 'Pausar';
});
