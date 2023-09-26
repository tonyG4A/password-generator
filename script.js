// Assignment Code
var CharaacterLength = 8;
var choice = [];

var SpecialCharcters = ["!","@","#","$","%","^","&","*","(",")","<",">","?",]
var LowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
var UpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
var Numeric = ["0","1","2","3","4","5","6","7","8","9","10"]

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctprompts = getPrompt();

 
  if(correctprompts) {
  var newpassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = newpassword;
  
} else{
    passwordText.value ="";
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() { 
  var password = "";
  for(var i =  0; 1 < CharaacterLength; i++) {
  var randomletter = Math.floor(Math.random() * choice.length);
  password = password + choice[randomIndex];
  return password
  }
}

function getPrompt() {
  choice = [];
  CharaacterLength = parseIntprompt("How many characters do you want your password to be? ( 8 - 128 characters?)")

if (isNaN(CharaacterLength) || CharaacterLength < 8 || CharaacterLength > 128) {
 alert("character length needs to be 8 - 128 digits, Please try again!")
 return false
}

 if (confirm("would you like your password to have a lowercase letter?")){

}
 if (confirm("would you like your password to have a uppercase letter?")){
  
}
 if (confirm("would you like your password to have a special character?")){
  
}
 if (confirm("would you like your password to have a number?")){
  
}
return true;
}