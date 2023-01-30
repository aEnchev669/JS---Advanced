// function solve() {

//   const input = document.getElementById('text').value;
//   const currCase = document.getElementById('naming-convention').value;
//   const result = document.getElementById('result');
//   let output = '';

//   let arr = input.split(" ");
//   if (currCase == 'Pascal Case') {
//     for (const word of arr) {
//       let lowerCase = word.toLowerCase();
//       output += lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
//     }
//   }
//   else if (currCase == 'Camel Case') {
//     for (let i = 0; i < arr.length; i++) {
//       let lowerCase = arr[i].toLowerCase();
//       if (i == 0) {
//         output += lowerCase;
//       }
//       else {
//         output += lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
//       }
//     }
//   }
//   else {
//     output = 'Error!';
//   }
//   result.textContent = output.toString();
// }
function solve() {

  const input = document.getElementById('text').value;
  const currCase = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');

  const toPascal = (text) => 
    text
      .split(" ")
      .map(i => i[0].toUpperCase() + i.slice(1).toLowerCase())
      .join("");
  

  const toCamel = (text) => {

    text = toPascal(text);
    return text[0].toLowerCase() + text.slice(1);
  }

  if (currCase == "Pascal Case") {
    result.textContent = toPascal(input);
  }
  else if (currCase == "Camel Case") {
    result.textContent = toCamel(input);
  }
  else {
    result.textContent = 'Error!';
  }
}
