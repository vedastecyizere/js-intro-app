function checkElement(thing) {
  console.log(thing);
}

function findSecondTitle() {
  console.log(document.getElementById("second-title"));
}

function changeImage() {
  document.getElementById("pet-image").src = "/assets/kitten.jpg";
}

function changeSecondTitle() {
  document.getElementById("second-title").innerHTML = "To something new!"
}

function finishSentence(phrase) {
  phrase.innerHTML = "we can do this!";
}