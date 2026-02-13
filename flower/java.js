
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);

    // Restore background music
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic) {
      if (sessionStorage.getItem('musicPlaying') === 'true') {
        const savedTime = parseFloat(sessionStorage.getItem('musicTime')) || 0;
        bgMusic.currentTime = savedTime;
        bgMusic.play();
      }
    }
  };

  window.goBackToMain = function() {
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic) {
      sessionStorage.setItem('musicPlaying', 'true');
      sessionStorage.setItem('musicTime', bgMusic.currentTime);
    }
    window.location.href = '../index.html';
  };