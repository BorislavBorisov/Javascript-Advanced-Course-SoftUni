function toggle() {
    let button = document.querySelector('.button');
    let buttonExtra = document.querySelector('#extra');

    buttonExtra.style.display = buttonExtra.style.display === 'block' ? 'none' : 'block';
    button.textContent = button.textContent === 'Less' ? 'More' : 'Less';
}