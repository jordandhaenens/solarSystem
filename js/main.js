let planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
let el = document.getElementById("planets");

planets.forEach(function(currValue, index, array){
	el.innerHTML += currValue + " ";
});

// Use the map method to create a new array where the first letter of each planet is capitalized
let capPlanets = planets.map(function(currValue, index, array){
	let str = currValue.slice(0, 1).toUpperCase() + currValue.slice(1);
	console.log(str);
	return str;
});
console.log(capPlanets);

// Use the filter method to create a new array that contains planets with the letter 'e'
let planetsWithE = planets.filter(function(element){
	let regExp = /e/gi;
	if (regExp.test(element)){
		return element;
	}
});
console.log("planetsWithE", planetsWithE);

// Use the reduce method to create a sentence from the words in the following array
let words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
words = words.reduce(function(acc, val){
	return acc + " " + val;
});
console.log(words);




















