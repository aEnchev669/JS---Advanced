function solve() {
    const fields = document.querySelectorAll('#container input');
    const addBtn = document.querySelector('#container button');
    const adoptionUl = document.querySelector('#adoption ul');
    const adoptedUl = document.querySelector('#adopted ul');

    const input = {
        name: fields[0],
        age: fields[1],
        kind: fields[2],
        owner: fields[3],
    }

    addBtn.addEventListener('click', addPet);

    function addPet(e) {
        e.preventDefault();

        const name = input.name.value;
        const age = Number(input.age.value);
        const kind = input.kind.value;
        const owner = input.owner.value;

        if (name && Number.isInteger(age) && kind && owner) {

            let li = document.createElement('li');
            let p = document.createElement('p');
            let strong1 = document.createElement('strong');
            let strong2 = document.createElement('strong');
            let strong3 = document.createElement('strong');
            let span = document.createElement('span');

            strong1.textContent = (name);
            strong2.textContent = (age);
            strong3.textContent = (kind);

            p.appendChild(strong1);
            p.appendChild(' is a ');
            p.appendChild(strong2);
            p.appendChild(' year old ');
            p.appendChild(strong3);

            li.appendChild(p);
        }
    }
}
