const lists  = document.querySelectorAll('.list');
const dots   = document.querySelectorAll('.dot');
const number = document.querySelector('.numbers');
const prev   = document.getElementById('prev');
const next   = document.getElementById('next');

let current = 0;

function goTo(index) {
    // Remove active de tudo
    lists.forEach(l => {
        l.classList.remove('active');
        l.querySelector('.item')?.classList.remove('active');
    });
    dots.forEach(d => d.classList.remove('active'));

    current = (index + lists.length) % lists.length;

    lists[current].classList.add('active');
    lists[current].querySelector('.item')?.classList.add('active');
    dots[current]?.classList.add('active');

    const n = String(current + 1).padStart(2, '0');
    if (number) number.textContent = n;
}

prev?.addEventListener('click', () => goTo(current - 1));
next?.addEventListener('click', () => goTo(current + 1));

dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

// Autoplay
let autoplay = setInterval(() => goTo(current + 1), 5000);

[prev, next].forEach(btn => {
    btn?.addEventListener('click', () => {
        clearInterval(autoplay);
        autoplay = setInterval(() => goTo(current + 1), 5000);
    });
});

// Init
goTo(0);