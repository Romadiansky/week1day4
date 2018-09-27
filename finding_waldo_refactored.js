function findWaldo(arr, found) {
  arr.forEach(function(name, i) {
    if (name === "Waldo") {
      found(i);
    }
  });
}

function actionWhenFound(index) {
  console.log("Found him! at index", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);