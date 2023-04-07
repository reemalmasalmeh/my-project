let userName = "Elzero"
console.log(userName.slice(3,-2)); // e
console.log(userName.charAt(3)); // e
console.log(userName.substring(userName.length-3 , userName.length-2)); // e
console.log(userName.substr(3,1)); // e
console.log(userName[3]); // e
console.log(userName.slice(3,-2).repeat(3)); // eee




let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes("Elzero")); // True
console.log(word.includes("z")); // True
console.log(letterO.includes("O")); // True
//console.log(word.startsWith("E",0)); // True
//.log(word.endsWith("E",0));