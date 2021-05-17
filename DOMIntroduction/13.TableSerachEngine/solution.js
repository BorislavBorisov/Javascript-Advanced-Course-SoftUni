function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tBodyElements = Array.from(document.querySelectorAll('tbody tr'));
      let textInput = document.getElementById('searchField').value.toLowerCase();

      for (const row of tBodyElements) {
         if (row.textContent.toLowerCase().includes(textInput) && row.textContent !== "") {
            row.setAttribute('class', 'select');
         } else {
            row.removeAttribute('select');

         }
      }
   }
}