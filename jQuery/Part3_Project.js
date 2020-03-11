//----------------------------------------------------------------------
//enter in Player names
var player1 = prompt("Player 1, enter your name, you will be Blue");
var player1Color = 'rgb(86, 151, 255)';
var player2 = prompt("Player 2, enter your name, you will be Red");
var player2Color = 'rgb(237, 45, 73)';
var currentPlayer = player1Color;

var table = $('table tr');

var turn = 1;
//----------------------------------------------------------------------
//Functions
//=============================================
function checkBottom(column) {
  var colorReport = returnColor(5,column);
  for (var row = 5; row > -1; row--) {
    colorReport = returnColor(row,column);
    if (colorReport === 'rgb(128, 128, 128)') {
      return row
    }
  }
}

//=============================================
function returnColor(row, column){
  return table.eq(row).find('td').eq(column).find('button').css('background-color');
}

//=============================================
function changeColor(row,column,color) {
  return table.eq(row).find('td').eq(column).find('button').css('background-color',color);
}

//=============================================
function colorMatchCheck(first, second, third, fourth){
  return(first === second && first === third && first === fourth && first !== 'rgb(128, 128, 128)' && first !== 'undefined');
}

//=============================================
function horWin(){
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1) ,returnColor(row,col+2), returnColor(row,col+3))) {
        return true;
      }else {
        continue;
      }
    }
  }
}

//=============================================
function verWin(){
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col) ,returnColor(row+2,col), returnColor(row+3,col))) {
        return true;
      }else {
        continue;
      }
    }
  }
}

//=============================================
function diagWin(){
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2), returnColor(row+3,col+3))) {
        return true;
      }
      if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
        return true;
      }
      else {
        continue;
      }
    }
  }
}

//=============================================
function endGame(winner){
  $('h3').fadeOut('fast');
  $('h2').fadeOut('fast');
  if(winner === 1){
    player = player1;
  }
  else{
    player = player2;
  }
  $('h1').text(player + " has won! Refresh your browser to play again!").css("fontSize", "50px");
}

//----------------------------------------------------------------------

$('h3').text(player1 + ": It is your turn to play! Drop your blue chip")
//on click of column
$('.board button').on("click",function(){

  //change bottom most slot to player color
  var col = $(this).closest("td").index();
  var bottomRowAvail = checkBottom(col);
  changeColor(bottomRowAvail, col, currentPlayer);

  //check if someone won
  if(horWin() || verWin() || diagWin()){
    endGame(turn);
  }

  //turn ends, change to other player
  turn = turn * -1;

  if (turn === 1){
    $('h3').text(player1 + ": It is your turn to play! Drop your blue chip")
    currentPlayer = player1Color;
  }
  else{
    $('h3').text(player2 + ": It is your turn to play! Drop your red chip")
    currentPlayer = player2Color;
  }
})
