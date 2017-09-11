var first = document.getElementById('first');
var input = document.getElementById('input');
var input2 = document.getElementById('input2');
var button = document.getElementById('button').addEventListener('click', calculate);
var button2 = document.getElementById('button2').addEventListener('click', calculate2);
var grades = [];
var innerH1 = document.getElementById('innerH1');
var innerH2 = document.getElementById('innerH2');
var innerH3 = document.getElementById('innerH3');

for (var i = 0; i <= 5; i++) {
	grades.push(i);
}


function calculate() {
	if (input.value <= 59) {
		innerH1.innerHTML = "F - Umm.. You Suck xD jk";
	}else if (input.value <= 69) {
		innerH1.innerHTML = "D - Hmm.. try harder";
	}else if (input.value <= 79) {
		innerH1.innerHTML = "C - Nice, almost there";
	}else if (input.value <= 89) {
		innerH1.innerHTML = "B - Nice Job";
	}else if (input.value <= 100) {
		innerH1.innerHTML = "A - Great Job";
	}else if (input.value > 100) {
		innerH1.innerHTML = "WOAH!! too much. Has to be 100 or less.";
	}
}
function calculate2() {
	if (input2.value <= 59) {
		innerH2.innerHTML = "F - Umm.. You Suck xD jk";
	}else if (input2.value <= 69) {
		innerH2.innerHTML = "D - Hmm.. try harder";
	}else if (input2.value <= 79) {
		innerH2.innerHTML = "C - Nice, almost there";
	}else if (input2.value <= 89) {
		innerH2.innerHTML = "B - Nice Job";
	}else if (input2.value <= 100) {
		innerH2.innerHTML = "A - Great Job";
	}else if (input2.value > 100) {
		innerH2.innerHTML = "WOAH!! too much. Has to be 100 or less.";
	}
}

	
var avButton = document.getElementById('avButton').addEventListener("click", calcAverage);
function calcAverage() {
	let iv1 = parseInt(document.getElementById("input").value);
	let iv2 = parseInt(document.getElementById("input").value);
	var sumIv = iv1 + iv2;
	innerH3.innerHTML = (sumIv / 2);
	
}
