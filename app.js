
var results = [[],[],[]];
$(document).ready(function(){

	$('.box').change(function(e){
		var i = $(this).attr('id').split('-')[0];
		var j = $(this).attr('id').split('-')[1];
	  results[i][j] = e.target.value;
		var status = checkWin(results);

		// if status included a winner, show the winner
		// if (status) {
		// $('.winner').innerHTML(status)
		// }
	});

  function checkWin() {
  	// check all rows for all Xs or all Os

  	// check all columns for all Xs or all Os 

  	// check all diagonals for all Xs or all Os

  	// if winner, return winner else return null

  };
  
});



