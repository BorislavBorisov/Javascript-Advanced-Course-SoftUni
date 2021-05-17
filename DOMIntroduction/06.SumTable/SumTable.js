function sumTable() {
    let allTrElements = document.getElementsByTagName('td');

    let sum = 0;

    for (let i = 3; i < allTrElements.length - 2; i += 2) {
        sum += Number(allTrElements[i]);
    }

    document.getElementById('sum').textContent = sum;
}