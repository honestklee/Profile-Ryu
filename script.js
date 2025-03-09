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

    // Load skill levels from localStorage
    const skillLevels = JSON.parse(localStorage.getItem('skillLevels')) || {};
    const skillBars = document.querySelectorAll('.skill');

    skillBars.forEach((skill, index) => {
        const skillName = skill.querySelector('span').textContent;
        const level = skillLevels[skillName] || 0;
        const bars = skill.querySelectorAll('.bar');
        
        for (let i = 0; i < level; i++) {
            if (i < bars.length) {
                bars[i].classList.remove('light');
                bars[i].classList.add('dark');
            }
        }
    });
});

function increaseSkill(button) {
    let bars = button.parentElement.querySelectorAll('.bar');
    let skillName = button.closest('.skill').querySelector('span').textContent;
    let skillLevels = JSON.parse(localStorage.getItem('skillLevels')) || {};
    
    if (!skillLevels[skillName]) skillLevels[skillName] = 0;

    for (let i = 0; i < bars.length; i++) {
        if (bars[i].classList.contains('light')) {
            bars[i].classList.remove('light');
            bars[i].classList.add('dark');
            skillLevels[skillName]++;
            localStorage.setItem('skillLevels', JSON.stringify(skillLevels));
            break;
        }
    }
}

function decreaseSkill(button) {
    let bars = button.parentElement.querySelectorAll('.bar');
    let skillName = button.closest('.skill').querySelector('span').textContent;
    let skillLevels = JSON.parse(localStorage.getItem('skillLevels')) || {};
    
    if (!skillLevels[skillName]) skillLevels[skillName] = 0;

    for (let i = bars.length - 1; i >= 0; i--) {
        if (bars[i].classList.contains('dark')) {
            bars[i].classList.remove('dark');
            bars[i].classList.add('light');
            skillLevels[skillName]--;
            localStorage.setItem('skillLevels', JSON.stringify(skillLevels));
            break;
        }
    }
}
