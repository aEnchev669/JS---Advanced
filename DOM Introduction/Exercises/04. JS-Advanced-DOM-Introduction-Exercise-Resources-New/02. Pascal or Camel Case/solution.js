function solve() {

  const input = document.getElementById('text').value;
  const currCase = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');
  let output = '';

  let arr = input.split(" ");
  if (currCase == 'Pascal Case') {
    for (const word of arr) {
      let lowerCase = word.toLowerCase();
      output += lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    }
  }
  else if (currCase == 'Camel Case') {
    for (let i = 0; i < arr.length; i++) {
      let lowerCase = arr[i].toLowerCase();
      if (i == 0) {
        output += lowerCase;
      }
      else {
        output += lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
      }
    }
  }
  else {
    output = 'Error!';
  }
  result.textContent = output.toString();
}

solve("Invalid Input", "Another Case");