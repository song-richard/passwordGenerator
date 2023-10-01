// Assignment code here
//Prompt User Input and ask how many characters for password
//Get prompt value, use value to dictate the length of password and replace with char.length in for-loop below

const requestedChar = window.prompt("How many characters do you want in your password?")

function generatePassword() {
  let newPassword = ""
  const char = "#$%&'()*+,-./:;<=>?@[^_`{|}~"


  for (i = 0; i < requestedChar; i++) {
    const randomIndex = Math.floor(Math.random() * char.length);
    newPassword += char[randomIndex];
  }
  return newPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
