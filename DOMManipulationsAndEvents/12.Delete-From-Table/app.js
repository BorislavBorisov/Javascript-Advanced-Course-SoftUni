function deleteByEmail() {
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let inputArea = document.querySelector('input[name="email"]').value;

    let isDeleted = false;
    for (const current of rows) {
        let children = current.children[1].textContent;
        if (children === inputArea) {
            current.remove();
            isDeleted = true;
        }
    }
    if (isDeleted) {
        document.getElementById('result').textContent = 'Deleted';
    } else {
        document.getElementById('result').textContent = 'Not found.';
    }
}