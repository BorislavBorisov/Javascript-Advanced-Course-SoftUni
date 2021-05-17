function addItem() {
    let optionEl = document.createElement('option');
    optionEl.textContent = document.getElementById('newItemValue').value;

    document.getElementById('menu').appendChild(optionEl);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';


}