function deleteByEmail() {
    const input = document.querySelector('input[name="email"]').value;
    const customers = document.querySelectorAll('#customers tbody tr');

    const arrOfCustomers = Array.from(customers);

    let deleted = false;
    for (let row of arrOfCustomers) {
        if (row.children[1].textContent == input) {
            row.remove();
            deleted = true;
        }
    }
    document.getElementById('result').textContent = deleted ? 'Deleted.' : 'Not found.';   
}