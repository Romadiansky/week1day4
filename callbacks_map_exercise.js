var words = ["ground", "control", "to", "major", "tom"];

var resultArray = [];

function map(words, action) {
  for (var word of words) {
    resultArray.push(action(word));
  }
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

// console.log(resultArray);