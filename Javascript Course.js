Javascript Course


// Using Object to Lookup
function phonelookup(val) {
  var result =""

  var lookup = {

    "Chalcedony" : "Nando",
    "Pelican" : "Wong",
    "Pelican2" : "Jason"
  };
  result = lookup[val]
  return result  
}
console.log(phonelookup("Pelican"));

Testing Objects for Properties
var myObj = {
	gift: "pony",
	pet: "kitten",
	bed: "sleigh"
};

function checkObj(checkProp) {
	if (myObj.hasOwnProperty(checkProp)){
		return myObj[checkProp];
	}
	else {
	return "Not Found";
	}
}

console.log(checkObj("gift"))

//Manipulating Complex Objects
var myMusic = [
  {
    "artist" : "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats":[
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
    {
      "artist": "Beau Carnes",
      "title": "Cereal Man",
      "release_year": 2003,
      "formats": [
        "Youtube video"
      ]
    }

]

//Accessing Nested Objects
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents)

//Record Collection
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let it Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"  
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
  
};

var collectioncopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){
  if (value === ""){
    delete collection [id][prop];
  }  else if (prop==="tracks"){
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value)
  } else {
    collection[id][prop] = value;
  }
  return collection;
}

console.log(updateRecords(5439,"album",""));

//Adding loop Array
var arr = [9,10,11,12];
total = 0;

for (i = 0; i < arr.length; i++){
  total += arr[i];
}
console.log(total)


//Iterate Through an Array with for loop
function multiplyall(arr){
  product = 1;

  for(i = 0; i < arr.length; i++){
    for(j = 0; j < arr[i].length; j++){
      product = product * arr[i][j];    
    }
  }
  return product;
}

var product = multiplyall([[1,2],[3,4],[5,6,7]]);
console.log(product);

//Do While Loop
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
}
while (i<5 )

console.log(i, myArray);


//Look Up Profile
function lookUpProfile(name,prop){
  for (var i = 0; i < contacts.length; i++){
    if(contacts.firstName === name){
      return contacts[i][prop] || "No such property";
    }
    else {
      return "Name not found";
    }
  }
}

var data = lookUpProfile("Akira","likes");
console.log(data);

//Random Decimal function
function randFraction(){

  return Math.random();
}

console.log(randFraction())

// Generate random whole number from 0-19

var rand019 = Math.floor(Math.random()*20);


console.log(rand019);

//Generate Random whole number within a range
function ourRandomRange(ourMin, ourMax){

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1,9);

function randomRange(myMin, myMax){

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

var myRandom = randomRange(5, 15);

console.log(myRandom);

//Use the parseInt Function
function convertToInteger(str){
  return parseInt(str);
}

convertToInteger("56");

//Use the parseInt Function with a Radix
function convertToInteger(str){
  return parseInt(str, 2)
}

convertToInteger("10011");

//Profile LookUp
function lookUpProfile(name, prop) {
  for (var x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

//Ternary Operative
function checkSign(num){
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(0));

//Mutate an Array Declared with const
const s = [5,7,2];
function editInPlace(){
  "use strict";

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();

console.log(s)

//Freeze Object
function freezeObj(){
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex){
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//Use Arrow Functions to Write Concise Anonymous Functions

var magic = function(){
  return new Date();
};

var magic = () => new Date()

//Write Arrow Functions with Parameters
var myConcat = function(arr1,arr2){
  return arr1.concat(arr2);
};

console.log(myConcat([1,2],[3,4,5]))

var myConcat => (arr1,arr2) => arr1.concat(arr2)

//Write Higher Order Arrow Functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers); 

//Use the Rest Operator with Function Parameters
const sum = (function(){
  return function sum(x,y,z) {
  const args = [x,y,z];
  return args.reduce((a,b) => a+b, 0);
};
})();
console.log(sum(1,2,3));

const sum = (function(){
  return function sum(...args) {  
  return args.reduce((a,b) => a+b, 0);
};
})();
console.log(sum(1,2,3));

//Use the Spread Operator to Evaluate Arrays In Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function(){
  arr2 = [...arr1];
  arr1[0] = 'Potato'
})();
console.log(arr2);

//Use Destructuring Assignment to Assign Variables from Objects
var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const { x:a, y:b, z:c} = voxel;

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures){
  "use strict";

  const {tomorrow : tempOfTomorrow} = avgTemperatures;
  return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));

//Use Destructuring Assignment with Nested Objects
const LOCAL_FORECAST = {
  today: {min: 72, max: 83},
  tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast){
  "use strict";

  const { tomorrow: { max : maxOfTomorrow}} = forecast;

  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));


//Use Destructuring Assignment to Assign Variables from Arrays
const [z, x, ,y] = [1,2,3,4,5,6];
console.log(z, x, y);

let a = 8, b=6;
(() => {
  "use strict";
  [a,b] = [b,a]
})();
console.log(a);
console.log(b);

//Use Destructuring Assignment with the Rest Operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [ , , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

//Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  return function half(stats){
   return (stats.max + stats.min) / 2.0;
  };
})();
console.log(stats);
console.log(half(stats));

//after
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  return function half({max, min}){
   return (max + min) / 2.0;
  };
})();
console.log(stats);
console.log(half(stats));

//Create Strings using Template Literals
