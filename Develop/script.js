let requestedChar;

do {
  requestedChar = parseInt(window.prompt("How many characters do you want in your password?"));
  if (isNaN(requestedChar)) {
    alert("Please enter a valid number for password length.");
  } else if (requestedChar < 8 || requestedChar > 128) {
    alert("Password length must be between 8 and 128 characters.");
  }
} while (isNaN(requestedChar) || requestedChar < 8 || requestedChar > 128);


const specialCharPrompt = window.prompt("Do you want special characters in your password?").toLowerCase()
const numericPrompt = window.prompt("Do you want to include numeric characters?").toLowerCase()
const lowerUpperPrompt = window.prompt("Do you want lowercase or uppercase characters?").toLowerCase()


function generatePassword() {
  let newPassword = "";
  let char = "abcdefghijklmnopqrstuvwxyz"; 

  if (lowerUpperPrompt === "uppercase") {
    char = char.toUpperCase(); 
  }

  if (specialCharPrompt === "yes") {
    char += "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
  }

  if (numericPrompt === "yes") {
    char += "0123456789";
  }

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
