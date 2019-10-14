//Objects
let toggleTurn =  'X';
const createGame = () => {
  let board = [
    ['a1','a2','a3'],
    ['b1','b2','b3'],
    ['c1','c2','c3'] ]
  return {board};
};

//  - - - - - - - - - - - - - - - - - - - - - - - -
//behaviour

function markSquare(cell_id){
  let currentCell = document.getElementById(cell_id);
  let marker = document.createElement("span");
  marker.id = "marker";
  currentCell.appendChild(marker);
  marker.textContent = toggleTurn;
  changePlayer();
};

function changePlayer(){
  if (toggleTurn === 'X'){
    toggleTurn = "O"
  } else if (toggleTurn === "O") {
    toggleTurn = "X"
  }
};

// - - - - - - - - - - - - - - - - - - - - - - - -
//SCRIPT

const test = createGame();

// 1. create game object
// 2. Update game board when cells are marked
  //    a. add PRIVATE function to game that changes board
