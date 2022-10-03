// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberValues = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
var lowerValues = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var symbolValues = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')',];
var characterAmount = [];
var charCodes = [];
var passCode = [];
var pass = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}


// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword)

generateBtn.addEventListener("click", function(){
  console.log('working');
  
  var characterAmount = prompt("How many characters would you like in your password? (Between 8-128):", "8");
  
  if (characterAmount >= 8 && characterAmount <= 128 && characterAmount !== null && characterAmount !== ''){
  } else 
  { alert("Password must be between 8 and 128 characters") 
  return};
  
  var symbols = confirm("Would you like to include symbols?")
  if(symbols === true){ charCodes = charCodes + (symbolValues)}
  
  var numbers = confirm("Would you like to include numbers?");
  if(numbers === true){ charCodes = charCodes + (numberValues)}
  
  var upcase = confirm("Would you like to include uppercase characters?");
  if(upcase === true){ charCodes = charCodes + (upperValues)}
  
  var lowcase = confirm("Would you like to include lowercase characters?"); 
  if(lowcase === true){ charCodes = charCodes + (lowerValues)}
  
  const passwordCharacters = []
  for (var i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String(characterCode))
  }
  var done = passwordCharacters.join('');
  console.log(done);
  console.log(charCodes.length);
  console.log(passwordCharacters);
  console.log(characterAmount);
})

