let input = "translate to whale";

const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for (i = 0; i < input.length; i++) {
  for (n = 0; n < vowels.length; n++) {
    if (input[i] === vowels[n]) {
      resultArray.push(input[i]);
    }
  }
  if (input[i] === vowels[0] || input[i] === vowels[4]) {
    resultArray.push(input[i]);
  }
}
resultArray = resultArray.join("").toUpperCase()

console.log(resultArray)
