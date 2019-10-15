//Objects
// let toggleTurn =  'X';

const createGame = () => {
  let toggleTurn =  'X';
  let endGame = false;
  let board = [
    [{'a1': '_'},{'a2': '_'},{'a3': '_'}],
    [{'b1': '_'},{'b2': '_'},{'b3': '_'}],
    [{'c1': '_'},{'c2': '_'},{'c3': '_'}] ];


  function markSquare(cell_id){
    let currentTurn = updateBoard(cell_id,toggleTurn);
      if (currentTurn === true){
        checkIfGameIsOver(toggleTurn);
        let currentCell = document.getElementById(cell_id);
        let marker = document.createElement("span");
        marker.className = "marker";
        currentCell.appendChild(marker);
        marker.textContent = toggleTurn;
        changePlayer();
      } else {alert("test")}
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
        if(board[0][0].a1 === '_'){
          board[0][0].a1 = playerMark;
          return true;
        }
        break;

      case 'a2':
        if(board[0][1].a2 === '_'){
          board[0][1].a2 = playerMark;
          return true;
        }
        break;

      case 'a3':
        if(board[0][2].a3 === '_'){
          board[0][2].a3 = playerMark;
          return true;
        }
        break;

      case 'b1':
        if(board[1][0].b1 === '_'){
          board[1][0].b1 = playerMark;
          return true;
        }
        break;

      case 'b2':
      if(board[1][1].b2 === "_"){
        board[1][1].b2 = playerMark;
        return true;
      }
        break;

      case 'b3':
      if(board[1][2].b3 === "_"){
        board[1][2].b3 = playerMark;
        return true;
      }
        break;

      case 'c1':
      if(board[2][0].c1 === "_"){
        board[2][0].c1 = playerMark;
        return true;
      }
        break;

      case 'c2':
      if(board[2][1].c2 === "_"){
        board[2][1].c2 = playerMark;
        return true;
      }
        break;
      case 'c3':
      if(board[2][2].c3 === "_"){
        board[2][2].c3 = playerMark;
        return true;
      }
        break;

    }
    console.log(board);
  };

  function checkIfGameIsOver(player){
    let xVictory  = "X,X,X";
    let oVictory  = "O,O,O";
    let row1      = [board[0][0].a1,board[0][1].a2,board[0][2].a3]
    let row2      = [board[1][0].b1,board[1][1].b2,board[1][2].b3]
    let row3      = [board[2][0].c1,board[2][1].c2,board[2][2].c3]
    let column1   = [board[0][0].a1,board[1][0].b1,board[2][0].c1]
    let column2   = [board[0][1].a2,board[1][1].b2,board[2][1].c2]
    let column3   = [board[0][2].a3,board[1][2].b3,board[2][2].c3]
    let diagonal1 = [board[0][0].a1,board[1][1].b2,board[2][2].c3]
    let diagonal2 = [board[0][2].a3,board[1][1].b2,board[2][0].c1]
    let combinations = [row1,row2,row3,column1,column2,column3,diagonal1,diagonal2];

    for (var i = 0; i < combinations.length; i++) {
      if(xVictory === combinations[i].join() && player === "X"){
      console.log('test works for X!')
      endGame = true;
      // gameOverdisplay();
      }
    }
    for (var i = 0; i < combinations.length; i++) {
      if(oVictory === combinations[i].join() && player === "O"){
      console.log('test works for O!')
      endGame = true;
      // gameOverdisplay();
      }
    }
  };

  function gameOverdisplay(){
    let gameOver = document.createElement("span");
    gameOver.id = "game-over";
    gameOver.textContent = "<- - GAME OVER - ->"
    let body = document.getElementsByTagName("body");
    body.appendChild(gameOver);
    console.log(body);
  };

  return {markSquare, board, gameOverdisplay};
};

//  - - - - - - - - - - - - - - - - - - - - - - - -
//behaviour


// - - - - - - - - - - - - - - - - - - - - - - - -
//SCRIPT

const testGame = createGame();

// 1. create game object
// 2. Update game board when cells are marked
  //    a. add PRIVATE function to game that changes board
