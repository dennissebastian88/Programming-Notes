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

Manipulating Complex Objects
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

Accessing Nested Objects
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

Accessing Nested Arrays


