var SQUARE = document.getElementById("triangle1");
var TRIANGLE = document.getElementById("triangle2");
var FLAG1 = 'FALSE';
var FLAG2 = 'FALSE';
var STOP = 'FALSE';
var LEFT1 = 95;
var BOTTOM1 = 95;
var LEFT2 = 95;
var BOTTOM2 = 95;

square.onmouseover = square.onmouseout = handler;
triangle.onmouseover = triangle.onmouseout = handler2;


function handler(event) {

  function str(el) {
    if (!el) return "null"
    return el.className || el.tagName;
  }


  if (event.type == 'mouseover') {
	SQUARE.style.display='block';
  }
  if (event.type == 'mouseout') {
    FLAG1 = 'TRUE';
  }
    if(FLAG1 == 'TRUE'|| FLAG2== 'TRUE')
  {
	  
	  STOP = 'TRUE';
  }
}
function handler2(event) {

  function str(el) {
    if (!el) return "null"
    return el.className || el.tagName;
  }


  if (event.type == 'mouseover') {
	TRIANGLE.style.display='block';
  }
  if (event.type == 'mouseout') {
    FLAG2 = 'TRUE';
  }
  if(FLAG1 == 'TRUE'|| FLAG2== 'TRUE')
  {
	  STOP = 'TRUE';
  }
}

function move(){
	SQUARE.style.left = LEFT1 + '%';
	SQUARE.style.bottom = BOTTOM1 +'%'
	TRIANGLE.style.left = LEFT2 + '%';
	TRIANGLE.style.bottom = BOTTOM2 +'%'
	if(LEFT1 > 5){
		LEFT1 -=5;
		
	}
	if(LEFT1 == 5 && BOTTOM1 > 5){
		BOTTOM1 -= 5;
	}
	if(BOTTOM2 > 5){
		BOTTOM2 -=5;
		
	}
	if(BOTTOM2 == 5 && LEFT2 > 5){
		LEFT2 -= 5;
	}
	
}

setInterval(function() {
	if (STOP == 'FALSE'){
		clearInterval();
	}
	else{
		move();
	}
  
}, 100);
