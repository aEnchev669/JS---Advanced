function sumTable() {
    let table = document.querySelectorAll("table tr");
    let sum = 0;
    for (let i = 1; i < table.length; i++) {

        let cols = table[i].children;

        sum += Number(cols[cols.length - 1].textContent);
    }

    document.getElementById('sum').textContent = sum;
}