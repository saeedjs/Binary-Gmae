var db;
var digits = [];"#input"
var health = 5;
var healthh = 0;
var i=1;
var b;
var tgame = 2000;
var n = 10;
var n2 = 10;
var tru = 0;
var levelt = "مرحله اول";
var level = 1;
var eb = 9;
var htg = tgame*1.3;
 var hm = 300;
var gamebool;
$(function () {
	$(".keys div").click(function() {
		let id = $(this).attr("id");
		var lastval;
		switch(id)
		{
			case "n0":
				lastval = $("#input").val();
				$("#input").val(lastval+"0");
				$(".in2").val(lastval+0)
			break;
			case "n1":
				lastval = $("#input").val();
				$("#input").val(lastval+"1");
				$(".in2").val(lastval+1)
			break;
			case "n2":
				lastval = $("#input").val();
				$("#input").val(lastval+"2");
				$(".in2").val(lastval+2)
			break;
			case "n3":
				lastval = $("#input").val();
				$("#input").val(lastval+"3");
				$(".in2").val(lastval+3)
			break;
			case "n4":
				lastval = $("#input").val();
				$("#input").val(lastval+"4");
				$(".in2").val(lastval+4)
			break;
			case "n5":
				lastval = $("#input").val();
				$("#input").val(lastval+"5");
				$(".in2").val(lastval+5)
			break;
			case "n6":
				lastval = $("#input").val();
				$("#input").val(lastval+"6");
				$(".in2").val(lastval+6)
			break;
			case "n7":
				lastval = $("#input").val();
				$("#input").val(lastval+"7");
				$(".in2").val(lastval+7)
			break;
			case "n8":
				lastval = $("#input").val();
				$("#input").val(lastval+"8");
				$(".in2").val(lastval+8)
			break;
			case "n9":
				lastval = $("#input").val();
				$("#input").val(lastval+"9");
				$(".in2").val(lastval+9)
			break;
			case "minues":
				lastval = $("#input").val();
				$("#input").val(lastval+"-");
				$(".in2").val(lastval+"-")
			break;
			case "del":
				lastval = $("#input").val();
				lastval = lastval.slice(0,lastval.length-1);
				$(".in2").val(lastval);
				$("#input").val(lastval);
			break;
			case "enter":
				keycode(13);
			break;
		}
	})
	$("button").click(function() {
		var val = $(this).attr("data-id");
	$("#start").hide();
	$("#main").css("display","block");
	$("#health").css("display","block");
	switch(val)
	{
		case "binary":
			db = "2";
		break;
		case "decimal":
			db = "10";
		break;
		case "and":
			db = "&";
		break;
		case "or":
			db = "|";
		break;
		case "xor":
			db = "^"
		break;
		case "not":
			db = "~";
		break;
		case "right":
			db = ">>";
		break;
		case "left":
			db = "<<";
		break;
		case "fill right":
			db = ">>>";
		break;
	}
	game();
	});
	$(document).keydown(function (e) {
		var key = e.which || e.keyCode;
		keycode(key);
	});
	function keycode(key)
	{
		if(key==13)
		{
			var input = $("#input").val();
			input = input.toString();
			if(inArray(input,digits))
			{
				var digittop = $(".digit[data-id="+input+"]").offset();
				var inputtop = $("#input-container").offset();
				if (!inputtop.top-7 <= digittop.top)
				{
					$(".digit[data-id="+input+"]").slideUp();
					setTimeout(timerem,1000);
					function timerem() {
						$(".digit[data-id="+input+"]").remove();
					}
					if (db != "10")
						input = parseInt(input);
					let result = 0;
					while(result != -1)
					{
						result = digits.indexOf(input);
						delete digits[result];
						if (result != -1)
						{
							tru++;
							n2--;
						}
					}
				}
			}
			else
			{
				health -= 1;
				healthh++;
				$(`#h${healthh}`).attr("src","heartw.png");
			}
			$("#input").val("");
			$(".in2").val("");
			$("#input").focus();
		}
	}
	var gbs = setInterval(function () {
		if(gamebool)
		{
			$(".digit").remove();
			switch(level)
			{
				case 1:
					health = 5;
					i = 1;
					tgame = 2000;
					htg = tgame*1.3;
					hm = 300;
					n = 10;
					n2 = 10;
					tru = 0;
					levelt = "مرحله اول";
					digits = [];
					eb = 9;
					game();
				break;
				case 2:
					health = 5;
					i = 1;
					tgame = 3000;
					htg = tgame*1.3;
					hm = 200;
					n = 40;
					n2 = 40;
					tru = 0;
					levelt = "مرحله دوم";
					digits = [];
					eb = 9;
					game();
				break;
				case 3:
					health = 5;
					i = 1;
					tgame = 3000;
					htg = tgame*1.3;
					hm = 150;
					n = 25;
					n2 = 25;
					tru = 0;
					levelt = "مرحله سوم";
					digits = [];
					eb = 19;
					game();
				break;
				case 4:
					health = 5;
					i = 1;
					tgame = 3000;
					htg = tgame*1.3;
					hm = 150;
					n = 40;
					n2 = 40;
					tru = 0;
					levelt = "مرحله چهارم";
					digits = [];
					eb = 19;
					game();
				break;
				case 5:
					health = 5;
					i = 1;
					tgame = 3000;
					htg = tgame*1.3;
					hm = 150;
					n = 65;
					n2 = 65;
					tru = 0;
					levelt = "مرحله پنجم";
					digits = [];
					eb = 19;
					game();
				break;
				case 6:
					health = 5;
					i = 1;
					tgame = 3000;
					htg = tgame*1.3;
					hm = 150;
					n = 70;
					n2 = 70;
					tru = 0;
					levelt = "مرحله ششم";
					digits = [];
					eb = 39;
					game();
				break;
				case 7:
					health = 4;
					i = 1;
					tgame = 3000;
					htg =tgame*1.3;
					hm = 150;
					n = 80;
					n2 = 80;
					tru = 0;
					levelt = "مرحله هفتم";
					digits = [];
					eb = 69;
					game();
				break;
				case 8:
					health = 3;
					i = 1;
					tgame = 3000;
					htg = tgame*1.3;
					hm = 150;
					n = 90;
					n2 = 90;
					tru = 0;
					levelt = "مرحله هشتم";
					digits = [];
					eb = 99;
					game();
				break;
				case 9:
					health = 2;
					i = 1;
					tgame = 3000;
					htg = tgame*1.3;
					hm = 150;
					n = 100;
					n2 = 100;
					tru = 0;
					levelt = "مرحله نهم";
					digits = [];
					eb = 199;
					game();
				break;
				case 10:
					health = 1;
					i = 1;
					tgame = 3000;
					htg = tgame*1.3;
					hm = 150;
					n = 150;
					n2 = 150;
					tru = 0;
					levelt = "مرحله آخر";
					digits = [];
					eb = 255;
					game();
				break;
			}
		}
	})
	setTimeout(des,2500);
	function des() {
		$("#splash").css("display","none");
	}
});
function game() {
	$(".in2").val("");
	$("#input").val("");
	healthh = 0;
	$(".heimg").remove();
	gamebool = false;
	$("#main").append(`
		<div id="level">
			<div id="textlevel">
				${levelt}
			</div>
		</div>`);
	const myTimeout = setTimeout(none, 2500);
	function none() {
	  $("#level").remove();
	}
	const myTimeoutgame = setTimeout(startgame, 50);
	function startgame() {
		for(var c=1; c < health+1; c++)
			$("#health").append(`<img class="heimg" id="h${c}" src="heartr.png">`);
		var gameover = setInterval(function() {
			if (health < 1)
			{
				alert("gameover")
				gamebool = true;
				clearInterval(gameover);
			}
			if (n == 0 && n2 <= 0)
			{
				alert("You win");
				gamebool = true;
				level++;
				clearInterval(gameover);
			}
		})
		var game = setInterval(function () {
			if (n > 0)
			{
				var rd = rand(1,eb);
				var od = rand(1,eb)
				var rb;
				var result;
				var show;
				rb = dec2bin(rd);
				var left = rand(0,300);
				n--;
				switch(db)
				{
					case "2":
						result = rd;
						show = rb;
					break;
					case "10":
						result = rb;
						show = rd;
					break;
					case "&":
						result = rd & od;
						show = rd+"&"+od;
					break;
					case "|":
						result = rd | od;
						show = rd+"|"+od;
					break;
					case "^":
						result = rd ^ od;
						show = rd+"^"+od;
					break;
					case "~":
						result = ~ od;
						show = "~"+od;
					break;
					case ">>":
						result = rd >> od;
						show = rd+">>"+od;
					break;
					case "<<":
						result = rd << od;
						show = rd+"<<"+od;
					break;
					case ">>>":
						result = rd >>> od;
						show = rd+">>>"+od;
					break;
				}
				digits.push(result);
				$("#main").append(`<div class="digit" style="left: ${left}px" id="${i}" data-id="${result}">${show}</div>`);
			}
			start(i);
			i++;
		},htg)
	}
}
function start(b) {
	var boolstart = true;
	setInterval(intervalstart, 0);
	function intervalstart() {
		var digittop = $(`#${b}`).offset();
		var inputtop = $("#input-container").offset();
		if (inputtop.top <= digittop.top && boolstart)
		{
			$(`#${b}`).remove();
			health--;
			healthh++;
			n2--;
			boolstart = false;
			$(`#h${healthh}`).attr("src","heartw.png");
			clearInterval(intervalstart);
		}
	}
}
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}
function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}
function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}