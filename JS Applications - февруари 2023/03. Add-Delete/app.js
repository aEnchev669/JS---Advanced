function addItem() {
    const listOfItems = document.getElementById('items');
    const input = document.getElementById('newItemText');

    let li = document.createElement('li');
    const button = document.createElement('a');

    button.addEventListener('click',() => li.remove());
    button.textContent = '[Delete]';
    button.href = '#';
    li.textContent = input.value;
    li.appendChild(button);

    listOfItems.appendChild(li);

    input.value = '';
}