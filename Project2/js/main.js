/* Warren Morris 
   VFW 1303
   Project 2
*/


window.addEventListener("DOMContentLoaded", function () {




	function $(x) {
		var element = document.getElementById(x);
		return element;
	}
		
	function uat(v) { //this thing hates me
console.log(updateAT);
		var justworkplease = $(asstext).value=v;
	/* justworkplease.value=v;  */
		
		//document.getElementById('asstext').value=v; 
	
	}
//store data
	function showData () {
		
		
	}

//dumpdata
	function dumpLocal () {
		
		
		
	}

//displaydata

	function displayData () {
		
		
		
	}

//save

	function storeData () {
		
		
		
		
	}
	
	var bikeTypes = [
			"--Select Bike Type--",
			"BMX",
			"Mountain Bike",
			"Cruiser",
			"Road Bike"
	];
	
	
	
	
	var updateAT = $('asstime');
	
	updateAT.addEventListener("onchange", uat(updateAT.value));
	var displayData = $('displayLink');
	displayData.addEventListener("click", showData);
	var clearData = $('clear');
	clearData.addEventListener("click", dumpLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);
	






});