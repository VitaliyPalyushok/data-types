/*
var array = ["das","2","3","4"];

function getNumbers() {
  for (var i =0; i <array.length; i++) {
    if(+array[i]) {
      alert(+array[i]);
    }
    
  }
};
getNumbers ();
*/
//===============================================================================================================
/*
var array = ["a", "2", "3"]
var sum = 0;

function getNumericSum() {
	for (var i = 0; i < array.length; i++) {
		if (+array[i]) {
			 alert(array[i]);
		}
		sum += array[i];
	}
	alert (sum);
}


getNumericSum ();

*/
//===============================================================================================================
/*
var array = [2,"3",3,2];

function getQuanOfUniqueElements() {
	var unique = array.filter(function(item,i,array){
		return i == array.indexOf(item);
	})
	alert (unique);
}

getQuanOfUniqueElements();
*/
//===============================================================================================================
/*
function getQuanOfUniqueCharacters() {
	var nonUnique = "muahaha";
	var unique = nonUnique.split('').filter(function(item, i, array) { return array.indexOf(item) == i; }).join('');

	alert (unique);
}

getQuanOfUniqueCharacters();

*/

//===============================================================================================================

var persons = [ 
		{ name: "Vasya",age: 13 },
		{ name: "Vasiliy",age:66 }
		]
	
function getPensionersName(arr) {
		var newArr = [];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].age > 65) {
			newArr.push(arr[i])
			}
			
		}
		return newArr;
}

var newArr = [];
	newArr = getPensionersName(persons);
for (i = 0; i<newArr.length; i++) {
	alert (newArr[i].name);
}

getPensionersName();