var restart = document.querySelector('#b');
var cell1 = document.getElementById('11');
var cell2 = document.getElementById('12');
var cell3 = document.getElementById('13');
var cell4 = document.getElementById('21');
var cell5 = document.getElementById('22');
var cell6 = document.getElementById('23');
var cell7 = document.getElementById('31');
var cell8 = document.getElementById('32');
var cell9 = document.getElementById('33');
var cells = document.querySelectorAll('td');
var win = false;


restart.addEventListener("click", function(){
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
})

function changeMarker(){
  if (this.textContent === ""){
    this.textContent = "X";
  }
  else if (this.textContent === "X") {
    this.textContent = "O";
  }
  else if (this.textContent === "O") {
    this.textContent = "";
  }
}

function checkForWin(){
  console.log("Cell1 is: " + cell1.textContent);
  console.log("Cell2 is: " + cell2.textContent);
  console.log("Cell3 is: " + cell3.textContent);

  if(cell1.textContent == cell2.textContent == cell3.textContent){
    console.log("Won by row 1");
    return true;
  }
  else {
    return false;
  }
}

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", changeMarker);
  win = checkForWin();
  if(win){
    alert("Someone has won")
    break;
  }

}
