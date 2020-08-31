$(document).ready(function() {
	var counter = document.getElementById("counter");
	var counterInt;
	var addCount = document.getElementsByClassName("nextBtn")[0];
	var lowCount = document.getElementsByClassName("prevBtn")[0];

	addCount.onclick = function() {
		counterInt = parseInt(counter.innerHTML);
		increment(counterInt);
	}
	lowCount.onclick = function() {
		counterInt = parseInt(counter.innerHTML);
		decrement(counterInt);
	}

	function increment(value) {
		var finalCount = value + 1;
		counter.style.color = "green";
		// alert(finalCount);
		counter.innerHTML = finalCount;
	}
	function decrement(value) {
		var secCount = value - 1;
		if (secCount < 0) {
			// alert("Count cannnot go below zero");
			counter.style.color = "red";
		} else {
			// alert(secCount);
			counter.innerHTML = secCount;
		}
		
	}


});