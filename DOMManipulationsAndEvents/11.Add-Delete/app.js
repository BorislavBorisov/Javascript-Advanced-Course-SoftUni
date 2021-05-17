function addItem() {
    let input = document.getElementById('newText');
    let liElement = createElement('li', input.value);

    let deleteBtn = createElement('a', '[Delete]');
    deleteBtn.href = '#';

    deleteBtn.addEventListener('click', removeElement);
    liElement.appendChild(deleteBtn);

    document.getElementById('items').appendChild(liElement);
    input.value = '';


    function removeElement(event) {
        event.target.parentNode.remove();
    }


    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}