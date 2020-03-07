var turn;
var score;
var number_of_moves;

wins = [7, 56, 84, 73, 146, 273, 292, 448, 341, 277, 85];
var squares = document.getElementsByTagName("td");

function init_game() {
    box_clicked();
    start_new_game();
}


function start_new_game() {
    turn = "X";
    number_of_moves = 0;
    score = {"X": 0, "O": 0};
}

function box_clicked() {
  print("clicked");
    for (var i = 0; i < squares.length; i++) {
    	squares[i].addEventListener("click", function() {
        var add_to_score = parseInt(this.getAttribute('data-score'));
        score[turn] = score[turn] + add_to_score;
        number_of_moves = number_of_moves + 1;
        this.textContent = turn;

        if (wins.includes(score[turn]))
        {
            alert(turn + " wins!");
            start_new_game();
        } else if (number_of_moves === 9) {
            alert("Tie game!");
            start_new_game();
        } else {
            alternate_turn();
        }
      });
    }
}

function alternate_turn() {
    if (turn=="X") {
  		turn = "O";
     } else if (turn = "O") 
       turn = "X";
     }


function setup()
{
    init_game();
}
