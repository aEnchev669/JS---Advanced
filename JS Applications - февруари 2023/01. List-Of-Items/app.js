function addItem() {
    const listOfItems = document.getElementById('items');
    const input = document.getElementById('newItemText');
 
    let li = document.createElement('li');

    li.textContent = input.value;

    listOfItems.appendChild(li);
}