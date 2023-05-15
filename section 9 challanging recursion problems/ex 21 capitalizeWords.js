function capitalizeWords(arr) {
  if (arr.length === 0) return [];
  return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))];
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
