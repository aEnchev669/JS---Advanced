function deleteByEmail() {
    const input = document.querySelector('input[name="email"]').value;
    const emails = document.querySelectorAll('#customers tbody tr');

    const arr = Array.from(emails);

    let deleted = false;

    for (const row of arr) {
        if (row.children[1].textContent == input) {
            row.remove();
            deleted = true;
        }
    }

    document.getElementById('result').textContent = deleted ? 'Deleted.' : 'Not found.';
}