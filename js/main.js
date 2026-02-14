(function () {
  var btn = document.getElementById('btnHow');
  var audio = document.getElementById('allenAudio');
  var intro = document.getElementById('intro');
  var bouquet = document.getElementById('bouquet');
  var photoPunch = document.getElementById('photoPunch');
  var punchMessage = document.getElementById('punchMessage');

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

  function showPunchYou() {
    if (!punchMessage || punchMessage.classList.contains('visible')) return;
    punchMessage.setAttribute('aria-hidden', 'false');
    punchMessage.classList.remove('fade-out');
    punchMessage.classList.add('visible');
    setTimeout(function () {
      punchMessage.classList.add('fade-out');
      setTimeout(function () {
        punchMessage.classList.remove('visible', 'fade-out');
        punchMessage.setAttribute('aria-hidden', 'true');
      }, 500);
    }, 1500);
  }

  if (photoPunch) {
    photoPunch.addEventListener('click', showPunchYou);
    photoPunch.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showPunchYou();
      }
    });
  }
})();
