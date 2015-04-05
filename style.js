//Grid generator
// var square = "<div class='square'></div>";
// for(var i  = 0; i < 16; i++) {
// 	for(var j = 0; j < 16; j++){		
// 		$(".grid").append(square);			
// 	}
// 	$('.grid').append("<br>");
// }
var $select = $("select");
var $grid = $('.grid');
var $container = $("#container");
var size;

// // grid generator
createGrid(50,"default");

function createGrid(numSquares,option) {
	
	//build square grid based on input from user
	

	for(var i  = 0; i < numSquares * numSquares; i++){		
		$grid.append("<div class='square'></div>");			
	}

	$(".square").each(function(){
		$(this).append("<div class='inner'></div>");
	})

	//resize squares to fit within container
	var width = ($container.width())/ numSquares;
	$(".square").css({"width":width ,"height":width});
	$(".inner").css({"width":width ,"height":width});	

	// on mouseenter(), fill the squares with black color
	$(".inner").on("mouseenter", function(){
		switch(option){
			case "default":
				$(this).addClass("hover").css("background-color",  $select.val());
			break;
			case "ombre":
				$(this).parent().css("background-color", $select.val());
				$(this).css("opacity", $(this).css("opacity") * 0.85);
			break;
		}
	});
}

// When user clicks on button
$('button').on("click", function(){
	// stores grid size value in var
	var $userInput = $("input").val();
	size = parseInt($userInput, 10);
	$grid.empty();
	// creates a new grid with input value and grid type (taken from button ID)
	createGrid(size, $(this).attr('id'));
});

// changes colors on select
// $select.on("change", function(){
// 	//$(".hover").css("background-color",  $select.val());
// 	$('.inner').each(function(){
// 		if ($(this).css("opacity")==="1") {
// 			$(this).parent().css("background-color", $select.val());
// 		}
// 	});
// })


