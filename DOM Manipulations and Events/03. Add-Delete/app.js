function addItem() {
    const input = document.getElementById('newItemText');
    const newLi = document.createElement('li');
    newLi.textContent = input.value;

    const list = document.getElementById('items');

    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';

    deleteBtn.addEventListener('click', () => newLi.remove());
    newLi.appendChild(deleteBtn);
    list.appendChild(newLi);

    input.value = '';
}