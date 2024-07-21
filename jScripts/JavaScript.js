document.addEventListener('DOMContentLoaded', function () {
    function highlightActiveLink() {
        const currentPage = window.location.pathname.split('/').pop();
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    highlightActiveLink();
});

document.querySelectorAll('.bar-card').forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.bar-card-inner').classList.toggle('flipped');
    });
});
