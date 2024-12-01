document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('play-button');
    const audioPlayer = document.getElementById('audio-player');

    playButton.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.classList.add('playing');
        } else {
            audioPlayer.pause();
            playButton.classList.remove('playing');
        }
    });
});
