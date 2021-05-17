function extractText() {
    let liElements = Array.from(document.getElementsByTagName('li'));

    let text = liElements.map(e => e.textContent);

    document.getElementById('result').innerHTML = text.join('\n');
}