array = [1, 2, 5, 9, 10];

array.sort(compareNumbers);

function compareNumbers (a, b) {
  return a - b;
}

console.log(array);