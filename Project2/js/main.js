/* Warren Morris 
   VFW 1303
   Project 2
*/


window.addEventListener("DOMContentLoaded", function () {
	function $(x) {
		var element = document.getElementById(x);
		return element;
	}
		
	function uat(v) {

		$(atvalue).innerHTML = "0"; 
	}
//store data
	function showData () {
		
		
	}

//dumpdata
	function dumpData () {
		
		
		
	}

//displaydata

	function displayData () {
		
		
		
	}

//save

	function save () {
		
		
		
		
	}
	
	var bikeTypes = [
			"--Select Bike Type--",
			"BMX",
			"Mountain Bike",
			"Cruiser",
			"Road Bike"
	];
	
	
	
	
	var updateAT = $('asstime');
	updateAT.addEventListener("change", uat("test"));
	var displayData = $('displayLink');
	displayData.addEventListener("click", showData);
	var clearData = $('clear');
	clearData.addEventListener("click", dumpLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);
	






};