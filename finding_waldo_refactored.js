function findWaldo(arr, found) {
  arr.forEach(function(name) {
    if (name === "Waldo") {
      found();   // execute callback
    }
  });
}

function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);