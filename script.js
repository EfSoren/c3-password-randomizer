
var generateBtn = document.querySelector("#generate");
var numberValues = "123456789";
var lowerValues = "abcdefghijklmnopqrstuvwxyz";
var upperValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbolValues = "!@#$%^&*()";
var passLength = [];
var pass = [];


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}




generateBtn.addEventListener("click", function(){
  //resets values each time you request a password
  var passValues = [];
  
  var passLength = prompt("How many characters would you like in your password? (Between 8-128):", "8");
  
  if (passLength >= 8 && passLength <= 128 && passLength !== null && passLength !== ''){
  } else 
  { alert("Password must be between 8 and 128 characters") 
  return};

  //combines character types chosen into a single string
  var symbols = confirm("Would you like to include symbols?")
  if(symbols === true){ passValues = passValues + (symbolValues)}
  
  var numbers = confirm("Would you like to include numbers?");
  if(numbers === true){ passValues = passValues + (numberValues)}
  
  var upcase = confirm("Would you like to include uppercase characters?");
  if(upcase === true){ passValues = passValues + (upperValues)}
  
  var lowcase = confirm("Would you like to include lowercase characters?"); 
  if(lowcase === true){ passValues = passValues + (lowerValues)}
  
  //randomly selects a character from the available array equal to the number of characters you wanted
  const availableChars = []
  for (var i = 0; i < passLength; i++) {
    const charCode = passValues[Math.floor(Math.random() * passValues.length)];
    availableChars.push(charCode)
  }
// joins values into a single string
  var pass = availableChars.join('');
  
  password.placeholder = pass
  return
})

