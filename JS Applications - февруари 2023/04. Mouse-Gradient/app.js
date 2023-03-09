function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onClick);

    function onClick(event) {
        const percent = (Math.floor(event.offsetX / 3));

        document.getElementById('result').textContent = percent + '%';
    }
}