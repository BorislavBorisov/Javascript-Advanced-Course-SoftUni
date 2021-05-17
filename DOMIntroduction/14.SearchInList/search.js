function search() {
   let liElements = document.getElementsByTagName('li');
   let textInput = document.getElementById('searchText').value;
   let result = document.getElementById('result');

   let counter = 0;
   for (const li of liElements) {
      if (li.textContent.includes(textInput)) {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         counter++;
      } else {
         li.style.fontWeight = '';
         li.style.textDecoration = '';
      }
   }
   result.innerHTML = counter + ' matches found';

}


