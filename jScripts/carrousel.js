let currentIndex = 1; // Start with the center item as the second one

function moveLeft() {
    const track = document.querySelector('.carousel-track');
    const items = Array.from(document.querySelectorAll('.bar-item'));
    const lastItem = items[items.length - 1];
    track.insertBefore(lastItem, items[0]);
    updateCarousel(-1);
}

function moveRight() {
    const track = document.querySelector('.carousel-track');
    const items = Array.from(document.querySelectorAll('.bar-item'));
    const firstItem = items[0];
    track.appendChild(firstItem);
    updateCarousel(1);
}

function updateCarousel(direction) {
    const items = document.querySelectorAll('.bar-item');
    currentIndex = (currentIndex + direction + items.length) % items.length;
    items.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('large');
            item.classList.remove('small');
        } else {
            item.classList.add('small');
            item.classList.remove('large');
        }
    });
}

document.addEventListener('DOMContentLoaded', updateCarousel);