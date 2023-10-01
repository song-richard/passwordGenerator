// Assignment code here
function generatePassword() {
  let newPassword = ""
  const char = "#$%&'()*+,-./:;<=>?@[^_`{|}~"


  for (i = 0; i < char.length; i++) {
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
