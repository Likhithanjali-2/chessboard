function turnTheQueen(dir, queen) {
  queen["direction"] = dir;
  return;
}

function moveForward(pos, boardLength, step = 1) {
  switch (queen["direction"]) {
    case "N":
      if (pos["y_cordinate"] - step >= 0) {
        pos["y_cordinate"] -= step;
      } else console.log("Queen reached to the end of the board");
      break;

    case "E":
      if (pos["x_cordinate"] + step < boardLength) {
        pos["x_cordinate"] += step;
      } else console.log("Queen reached to the end of the board");
      break;

    case "S":
      if (pos["y_cordinate"] + step < boardLength) {
        pos["y_cordinate"] += step;
      } else console.log("Queen reached to the end of the board");
      break;

    case "W":
      if (pos["x_cordinate"] - step >= 0) {
        pos["x_cordinate"] -= step;
      } else console.log("Queen reached to the end of the board");
      break;

    case "NE":
      if (
        pos["x_cordinate"] + step < boardLength &&
        pos["y_cordinate"] - step >= 0
      ) {
        pos["x_cordinate"] += step;
        pos["y_cordinate"] -= step;
      } else console.log("Queen reached to the end of the board");
      break;

    case "NW":
      if (pos["x_cordinate"] - step >= 0 && pos["y_cordinate"] - step >= 0) {
        pos["x_cordinate"] -= step;
        pos["y_cordinate"] -= step;
      } else console.log("Queen reached to the end of the board");
      break;

    case "SE":
      if (
        pos["x_cordinate"] + step < boardLength &&
        pos["y_cordinate"] + step < boardLength
      ) {
        pos["x_cordinate"] += step;
        pos["y_cordinate"] += step;
      } else console.log("Queen reached to the end of the board");
      break;

    case "SW":
      if (
        pos["x_cordinate"] - step >= 0 &&
        pos["y_cordinate"] + step < boardLength
      ) {
        pos["x_cordinate"] -= step;
        pos["y_cordinate"] += step;
      } else console.log("Queen reached to the end of the board");
      break;

    default:
      console.log("Invalid Direction");
  }
}

function isNewPosition(arr, element) {
  for (var i = 0; i < arr.length; i++) {
    if (element == arr[i]) return false;
  }
  return true;
}

function trackThePosAndUpdate(queen, board) {
  queenStatus =
    board[queen["current_position"]["x_cordinate"]][
      queen["current_position"]["y_cordinate"]
    ];
  if (isNewPosition(queen["whereAbouts"], queenStatus))
    queen["whereAbouts"].push(queenStatus);
}

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

function main() {
  var boardLen = board.length;
  var pos = queen["current_position"];
  var nextTurn = "y";

  do {
    //turn the queen to the given direction
    var dir = prompt("Enter the direction of Queen to move ");
    turnTheQueen(dir, queen);

    //move the queen
    var movingChoice = prompt("Want to move or jump ? ").toLowerCase();
    if (movingChoice == "move") {
      console.log("moving forward one step");
      moveForward(pos, boardLen);
    } else if (movingChoice == "jump") {
      console.log("jumping!!");
      moveForward(
        pos,
        boardLen,
        Number(prompt("Enter how many steps you want to jump ? "))
      );
    } else {
      console.log("Please enter data properly");
    }

    //tracking the queen position and update
    trackThePosAndUpdate(queen, board);
    console.log(queen);

    nextTurn = prompt("Do you want to continue queen movement if yes press Y");
  } while (nextTurn == "y" || nextTurn == "Y");
}

main();
