var CharaacterLength = 8;
var choice = [];

var SpecialCharcters = ["!","@","#","$","%","^","&","*","(",")","<",">","?",]
var LowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
var UpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
var Numeric = ["0","1","2","3","4","5","6","7","8","9","10"]

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var correctprompts = getPrompt();
  var passwordText = document.querySelector("#password");
 
  if(correctprompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword; 
  
} else{
  passwordText.value ="";
  }

}



function generatePassword() { 
  var password = "";
  for(var i =  0; i < CharaacterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choice.length);
    password = password + choice[randomIndex];
  }
  return password
}

function getPrompt() {
  choice = [];
  CharaacterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters)?"));

  if (isNaN(CharaacterLength) || CharaacterLength < 8 || CharaacterLength > 128) {
    alert("Character length needs to be between 8 and 128 characters. Please try again!");
    return false;
  }

  if (confirm("Would you like your password to have a lowercase letter?")) {
    choice = choice.concat(LowerCase);
  }

  if (confirm("Would you like your password to have an uppercase letter?")) {
    choice = choice.concat(UpperCase);
  }

  if (confirm("Would you like your password to have a special character?")) {
    choice = choice.concat(SpecialCharcters);
  }

  if (confirm("Would you like your password to have a number?")) {
    choice = choice.concat(Numeric);
  }

  if (choice.length === 0) {
    alert("You must select at least one character type. Please try again!");
    return false;
  }

  return true;
}






