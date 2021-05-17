function solve(input) {
  input = document.getElementById("input").value;
  let out = document.getElementById("output");

  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    if (item.textContent.includes('.')) {
      counter++;
    }
  }

  if (counter > 3 && counter <= 6) {

  } else if (counter > 6) {

    
  } else {
    out.innerHTML = '<p>' + input + '</p>';
  }


}