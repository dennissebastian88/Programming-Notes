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

Record Collection
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




