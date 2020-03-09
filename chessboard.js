function changeTheDirection(dir, queen) {
  queen["direction"] = dir;
  return;
}

function moveTowardsDirection(direction, pos, step, boardLength) {
  switch (direction) {
    case "N":
      if (pos["x_cordinate"] - step >= 0) {
        pos["x_cordinate"] -= step;
      } else reachedEnd();
      break;

    case "E":
      if (pos["y_cordinate"] + step < boardLength) {
        pos["y_cordinate"] += step;
      } else reachedEnd();
      break;

    case "S":
      if (pos["x_cordinate"] + step < boardLength) {
        pos["x_cordinate"] += step;
      } else reachedEnd();
      break;

    case "W":
      if (pos["y_cordinate"] - step >= 0) {
        pos["y_cordinate"] -= step;
      } else reachedEnd();
      break;

    case "NE":
      if (
        pos["y_cordinate"] + step < boardLength &&
        pos["x_cordinate"] - step >= 0
      ) {
        pos["y_cordinate"] += step;
        pos["x_cordinate"] -= step;
      } else reachedEnd();
      break;

    case "NW":
      if (pos["y_cordinate"] - step >= 0 && pos["x_cordinate"] - step >= 0) {
        pos["y_cordinate"] -= step;
        pos["x_cordinate"] -= step;
      } else reachedEnd();
      break;

    case "SE":
      if (
        pos["y_cordinate"] + step < boardLength &&
        pos["x_cordinate"] + step < boardLength
      ) {
        pos["y_cordinate"] += step;
        pos["x_cordinate"] += step;
      } else reachedEnd();
      break;

    case "SW":
      if (
        pos["y_cordinate"] - step >= 0 &&
        pos["x_cordinate"] + step < boardLength
      ) {
        pos["y_cordinate"] -= step;
        pos["x_cordinate"] += step;
      } else reachedEnd();
      break;

    default:
      console.log("Invalid Direction");
  }
}

function reachedEnd() {
  console.log("Queen reached to the end of the board");
}

function isNewPosition(arr, element) {
  for (var i = 0; i < arr.length; i++) {
    if (element == arr[i]) return false;
  }
  return true;
}

function trackThePosAndUpdate(queenPos, whereAbouts, board) {
  queenStatus = board[queenPos["x_cordinate"]][queenPos["y_cordinate"]];
  if (isNewPosition(whereAbouts, queenStatus)) whereAbouts.push(queenStatus);
}

function init() {
  var board = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
  ];
  var queen = {
    current_position: {
      x_cordinate: 2,
      y_cordinate: 2
    },
    direction: "s",
    whereAbouts: ["c6"]
  };
  return board, queen;
}

function takeInputFromUser() {
  var userInput = [];
  do {
    input = prompt("Enter input direction and steps to move the queen :)");
    userInput.push(input);
  } while (input != "");
  return userInput;
}

function main() {
  var ui, direction, noOfSteps;
  var userInput = takeInputFromUser(); //["E1", "N2", "S3", "W2", "NE2", "SE2", "NW2", "SW2"];
  board, (queen = init());

  for (var i = 0; i < userInput.length - 1; i++) {
    ui = userInput[i];
    direction = ui.slice(0, ui.length - 1);
    noOfSteps = Number(ui.slice(ui.length - 1));

    changeTheDirection(direction, queen);
    moveTowardsDirection(
      queen["direction"],
      queen["current_position"],
      noOfSteps,
      board.length
    );
    trackThePosAndUpdate(
      queen["current_position"],
      queen["whereAbouts"],
      board
    );
  }
  console.log(queen);
  return;
}

main();
