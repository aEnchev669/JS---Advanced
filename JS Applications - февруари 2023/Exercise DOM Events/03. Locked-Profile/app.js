function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button'))
        .forEach((e) => e.addEventListener('click', clicked));

    function clicked(e) {
        const parent = e.target.parentElement;
        const unlockedCheck = parent.querySelector('input[value="unlock"]');

        if (unlockedCheck.checked) {
            const hiddenDiv = parent.querySelector('div');

            hiddenDiv.style.display == 'block' ? hiddenDiv.style.display = 'none' : hiddenDiv.style.display = 'block';
            e.target.textContent == 'Show more' ? e.target.textContent = 'Hide it' : e.target.textContent = 'Show more';
        }
    }
}
