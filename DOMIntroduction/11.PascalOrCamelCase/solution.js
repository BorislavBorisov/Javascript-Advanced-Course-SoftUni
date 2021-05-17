function solve(textElements, namingConvention) {
  textElements = document.getElementById('text').value;
  let result = textElements.split(' ');
  namingConvention = document.getElementById('naming-convention').value;

  let out = '';


  switch (namingConvention) {
    case 'Camel Case':

      break;
    case 'Pascal Case':
      for (let i = 0; i < result.length; i++) {
        let current = result[i].toLowerCase();
        for (let j = 0; j < result[i].length; j++) {
          let toLowerCase = current.toLowerCase();
          let firstLett = toLowerCase.charAt(0).toUpperCase();
          out += firstLett;
        }
      }

      break;

    default:
      break;
  }

  document.getElementById('result').textContent += out;
}

// result[i] = result[i][0].toUpperCase() + result[i].substr(1);
