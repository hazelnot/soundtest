//set default slider value
window.onload = function(){
	$(".slider1").val(0);
};

//print slider value
function sliderVal(){
  var slider = $(".slider1").val();
  console.log(slider);
};

var song = 1;
var phase = 1;

window.onload = function(){
	$( "#rock" ).click(function(){
		song = 1;
		console.log( "Genre changed to Rock." );
		PlaySong(song, phase);
	});
	$( "#metal" ).click(function(){
		song = 2;
		console.log( "Genre changed to Metal." );
		PlaySong(song, phase);
	});
	$( "#pop" ).click(function(){
		song = 3;
		console.log( "Genre changed to Pop." );
		PlaySong(song, phase);
	});
	$( "#box1" ).click(function(){
		phase = 1;
		console.log( "Phase One Playing" );
		PlaySong(song, phase);
	});
	$( "#box2" ).click(function(){
		phase = 2;
		console.log( "Phase Two Playing" );
		PlaySong(song, phase);
	});
	$( "#box3" ).click(function(){
		phase = 3;
		console.log( "Phase Three Playing" );
		PlaySong(song, phase);
	});
};

function PlaySong(song, phase){
	if ( song == 1 && phase == 1 ){
		console.log("Song One, Phase One");
        $("#s1p1").css( "display", "block" );
	};
	if ( song == 1 && phase == 2 ){
		console.log("Song One, Phase Two");
	};
	if ( song == 1 && phase == 3 ){
		console.log("Song One, Phase Three");
	};
	if ( song == 2 && phase == 1 ){
		console.log("Song Two, Phase One");
	};
	if ( song == 2 && phase == 2 ){
		console.log("Song Two, Phase Two");
	};
	if ( song == 2 && phase == 3 ){
		console.log("Song Two, Phase Three");
	};
	if ( song == 3 && phase == 1 ){
		console.log("Song Three, Phase One");
	};
	if ( song == 3 && phase == 2 ){
		console.log("Song Three, Phase Two");
	};
	if ( song == 3 && phase == 3 ){
		console.log("Song Three, Phase Three");
	};
};
