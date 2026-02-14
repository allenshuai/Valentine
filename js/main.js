(function () {
  var btn = document.getElementById('btnHow');
  var audio = document.getElementById('allenAudio');
  var intro = document.getElementById('intro');
  var bouquet = document.getElementById('bouquet');

  btn.addEventListener('click', function () {
    if (audio.paused) {
      audio.play();
    }
  });

  audio.addEventListener('ended', function () {
    intro.classList.add('hidden');
    bouquet.classList.add('visible');
    bouquet.classList.remove('not-loaded');
  });
})();
