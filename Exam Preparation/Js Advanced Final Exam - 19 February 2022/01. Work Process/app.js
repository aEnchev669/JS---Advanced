function solve() {
    const inputFName = document.getElementById('fname');
    const inputName = document.getElementById('lname');
    const inputEmail = document.getElementById('email');
    const inputBirth = document.getElementById('birth');
    const inputPosition = document.getElementById('position');
    const inputSalary = document.getElementById('salary');
    const tBody = document.getElementById('tbody');
    const salarySum = document.getElementById('sum');
    let salary = 0;
    document.getElementById('add-worker').addEventListener('click', (e) => {
        e.preventDefault();
        if (inputFName.value && inputName.value && inputEmail.value && inputBirth.value && inputPosition.value && inputSalary.value) {

            const tr = createElement('tr');
            createElement('td', `${inputFName.value}`, tr);
            createElement('td', `${inputName.value}`, tr);
            createElement('td', `${inputEmail.value}`, tr);
            createElement('td', `${inputBirth.value}`, tr);
            createElement('td', `${inputPosition.value}`, tr);
            createElement('td', `${inputSalary.value}`, tr);

            const td = createElement("td", "", tr);
            let fireBtn = createElement('button', 'Fired', td);
            fireBtn.setAttribute('class', 'fired');
            let editBtn = createElement('button', 'Edit', td);
            editBtn.setAttribute('class', 'edit');
            tBody.appendChild(tr);

            salary += Number(inputSalary.value);
            salarySum.textContent = salary.toFixed(2);

            inputFName.value = '';
            inputName.value = '';
            inputEmail.value = '';
            inputBirth.value = '';
            inputPosition.value = '';
            inputSalary.value = '';

            editBtn.addEventListener('click', (e) => {
                editWorker(e, inputFName.value, inputName.value, inputEmail.value, inputBirth.vlaue, inputPosition.value, inputSalary.value);
            });
        }
    });

    function editWorker(e, fName, lName, email, birth, position, salary) {

    }

    function createElement(type, content, parent) {
        const element = document.createElement(type);
        element.textContent = content;

        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }

}
solve()