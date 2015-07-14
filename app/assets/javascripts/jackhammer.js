var clickCounter = 0;

function clickBox() {
  clickCounter++;

  if (clickCounter === 5) {
    alert("You've won!");
    clickCounter = 0;
  }
}