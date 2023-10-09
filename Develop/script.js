let requestedChar;

//Error handling added to prompts
do {
  requestedChar = parseInt(window.prompt("How many characters do you want in your password?"));
  if (isNaN(requestedChar)) {
    alert("Please enter a valid number for password length.");
  } else if (requestedChar < 8 || requestedChar > 128) {
    alert("Password length must be between 8 and 128 characters.");
  }
} while (isNaN(requestedChar) || requestedChar < 8 || requestedChar > 128);

//Prompts to ask user what criterias they would like for their generated password
const specialCharPrompt = window.prompt("Do you want special characters in your password?").toLowerCase()
const numericPrompt = window.prompt("Do you want to include numeric characters?").toLowerCase()
const lowerUpperPrompt = window.prompt("Do you want lowercase or uppercase characters?").toLowerCase()

//The function will generate the password based on their criteria selections
function generatePassword() {
  let newPassword = "";
  let char = "abcdefghijklmnopqrstuvwxyz"; 

  //Will add uppercase characters if the user chooses
  if (lowerUpperPrompt === "uppercase") {
    char = char.toUpperCase(); 
  }

  //Will add special characters if the user chooses
  if (specialCharPrompt === "yes") {
    char += "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
  }

  //Will add numeric characters if the user chooses
  if (numericPrompt === "yes") {
    char += "0123456789";
  }

  //The loop will generate a random index that  will be used to randomize character selection
  //Then, it will add the randomized character to the new password
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
