
var results = [[],[],[]];
$(document).ready(function(){

	$('.box').change(function(e){
		var i = $(this).attr('id').split('-')[0];
		var j = $(this).attr('id').split('-')[1];
	  results[i][j] = e.target.value;
		var status = checkWin(results);

		// if status included a winner, show the winner
		if (status) {
		  $('.winner').innerHTML(status)
		}
	});

	$('.reset').click(function(){
		$('.box').val('');
	});

  function checkWin(array) {
    // Replace all Xs with 1s and all Os with zeros

  	// check all rows for a sum = 3 or a sum = 0, if winner return winner
    
  	// check all columns for a sum = 3 or a sum = 0, if winner return winner

  	// check all diagonals for a sum = 3 or a sum = 0, if winner return winner

  	// if no winner was found above, return null
    return null;
  };
  
});



