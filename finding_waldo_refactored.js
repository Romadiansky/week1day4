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


//here is it, refactored

function findWaldo(arr) {
  arr.forEach(findName);
}

function findName(name, i) {
    if (name === "Waldo") {
      actionWhenFound(i);   // execute callback
    }
  }

function actionWhenFound(index) {
  console.log("Found him at index: ", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"]);