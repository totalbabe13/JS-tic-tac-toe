//Objects
// let toggleTurn =  'X';
const createGame = () => {
  let toggleTurn =  'X';
  let board = [
    ['a1','a2','a3'],
    ['b1','b2','b3'],
    ['c1','c2','c3'] ];

  function markSquare(cell_id){
    let currentCell = document.getElementById(cell_id);
    let marker = document.createElement("span");
    marker.className = "marker";
    currentCell.appendChild(marker);
    marker.textContent = toggleTurn;

    updateBoard(cell_id,toggleTurn);
    changePlayer();
    };

  function changePlayer(){
      if (toggleTurn === 'X'){
        toggleTurn = "O"
      } else if (toggleTurn === "O") {
        toggleTurn = "X"
      }
  };

  function updateBoard(cell_id,playerMark) {
    switch (cell_id) {
      case 'a1':
        if(board[0][0] === 'a1'){
          board[0][0] = playerMark;
        }
        break;
      case 'a2':
        board[0][1] = playerMark;
        break;
      case 'a3':
        board[0][2] = playerMark;
        break;
      case 'b1':
        board[1][0] = playerMark;
        break;
      case 'b2':
        board[1][1] = playerMark;
        break;
      case 'b3':
        board[1][2] = playerMark;
        break;
      case 'c1':
        board[2][0] = playerMark;
        break;
      case 'c2':
        board[2][1] = playerMark;
        break;
      case 'c3':
        board[2][2] = playerMark;
        break;

    }
    console.log(board);
  };


  return {board,markSquare};
};

//  - - - - - - - - - - - - - - - - - - - - - - - -
//behaviour

// function markSquare(cell_id){
//   let currentCell = document.getElementById(cell_id);
//   let marker = document.createElement("span");
//   marker.id = "marker";
//   currentCell.appendChild(marker);
//   marker.textContent = toggleTurn;
//   changePlayer();
// };
//
// function changePlayer(){
//   if (toggleTurn === 'X'){
//     toggleTurn = "O"
//   } else if (toggleTurn === "O") {
//     toggleTurn = "X"
//   }
// };

// - - - - - - - - - - - - - - - - - - - - - - - -
//SCRIPT

const testGame = createGame();

// 1. create game object
// 2. Update game board when cells are marked
  //    a. add PRIVATE function to game that changes board
