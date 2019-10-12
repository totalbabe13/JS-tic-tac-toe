//Objects ??
let cellA1 = document.getElementById('a1')
let cellA2 = document.getElementById('a2')
let cellA3 = document.getElementById('a3')
let cellB1 = document.getElementById('b1')
let cellB2 = document.getElementById('b2')
let cellB3 = document.getElementById('b3')
let cellC1 = document.getElementById('c1')
let cellC2 = document.getElementById('c2')
let cellC3 = document.getElementById('c3')

let toggleTurn =  'X';

function markSquare(cell_id){
  let currentCell = document.getElementById(cell_id);
  // let toggleTurn ='X';
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
