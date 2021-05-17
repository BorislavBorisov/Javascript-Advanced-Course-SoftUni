function create(words) {
    let content = document.getElementById('content');

    words.forEach(w => {
        let newDiv = document.createElement('div');
        let paragraph = document.createElement('p');

        paragraph.textContent = w;
        paragraph.style.display = 'none';

        newDiv.addEventListener('click',() => {
            paragraph.style.display = 'block';
        });
        newDiv.appendChild(paragraph);
        content.appendChild(newDiv);
    })

}