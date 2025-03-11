document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timelineItems.forEach(item => item.classList.remove('active'));
                entry.target.classList.add('active');
            }
        });
    }, options);

    timelineItems.forEach(item => {
        observer.observe(item);
    });
});
