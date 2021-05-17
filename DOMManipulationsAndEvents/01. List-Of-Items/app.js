function addItem() {
    let createLiElement = document.createElement('li');
    createLiElement.textContent = document.getElementById('newItemText').value;
    document.getElementById('items').appendChild(createLiElement);
    document.getElementById('newItemText').value = '';
}