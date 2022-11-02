var wd = require("word-definition");
 


// Example usage:
wd.getDef("challenge", "en", null, function(definition) {
  let defArray = Object.entries(definition);
  console.log(defArray[1][1], "\n ------")
  console.log(defArray[2][1]);
}); 