var boxNumbersClicked = [];

function clickOne(boxNumber) {
  if (boxNumbersClicked.indexOf(boxNumber) === -1) {
    boxNumbersClicked.push(boxNumber);
  }

  checkIfWinner();
}

function checkIfWinner() {
  if(boxNumbersClicked.length === 3) {
    userWin();
  }
}

function userWin() {
  alert("You win!");
}

