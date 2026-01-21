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

    // Inject parallax CSS override for body::before without editing index.html
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      body::before{ background-position: center calc(0px + var(--bg-offset, 0px)) !important; }
    `;
    document.head.appendChild(styleEl);
    
    // Initialize parallax with requestAnimationFrame for smoother motion
    const model = document.querySelector('.banner .model');
    const bannerContent = document.querySelector('.banner .content');
    const bannerSlider = document.querySelector('.banner .slider');
    let currentY = 0;
    let targetY = 0;
    const ease = 0.12; // smoothing factor

    const update = () => {
        const sc = targetY;
        // background pseudo element offset
        document.body.style.setProperty('--bg-offset', (sc * 0.3) + 'px');
        // model background subtle move
        if (model) model.style.backgroundPosition = `center calc(${sc * 0.15}px)`;
        // slight translate on foreground layers for visible parallax
        if (bannerContent) bannerContent.style.transform = `translate(-50%, ${-sc * 0.05}px)`;
        if (bannerSlider) bannerSlider.style.transform = `perspective(1000px) translateZ(0) rotateX(-16deg) rotateY(calc((var(--rot, 0)) * 1deg)) translateY(${-sc * 0.03}px)`;
        requestAnimationFrame(tick);
    };

    const tick = () => {
        const sy = window.scrollY || window.pageYOffset || 0;
        targetY = sy;
        currentY += (targetY - currentY) * ease;
        document.body.style.setProperty('--bg-offset', (currentY * 0.3) + 'px');
        if (model) model.style.backgroundPosition = `center calc(${currentY * 0.15}px)`;
        if (bannerContent) bannerContent.style.transform = `translate(-50%, ${-currentY * 0.05}px)`;
        if (bannerSlider) bannerSlider.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(0deg) translateY(${-currentY * 0.03}px)`;
        requestAnimationFrame(tick);
    };
    requestAnimationFrame(update);
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
