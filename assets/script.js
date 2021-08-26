// Assignment Code
var generateBtn = document.querySelector("#generate");

// Why do we have these strings here?
// We have these strings here because we need the variable objects to pull from based on the users' preference for their password
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numeric = "0123456789";
var special = "!@#$%^&*()_+";

function getRandom(str) {
  // What is going on here?
  // this will create a random grouping of the objects from the previous strings created ex. 0 x length
  var randomIndex = Math.floor(Math.random() * str.length);
  // and here?
  //this is the output ex.Dfas%hs1
  return str[randomIndex];
}

// Write password to the #password input
function writePassword() {
  // What is the difference between return and console log?
  //return is the end result of certain conditions being met, console log is you telling the console what to print
  // What happens if we console log our password instead of returning it?
  //If you use console log instead of returning it will just print the output in the console  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // Ask the user for their password criteria
  // 8 characters and no more than 128 characters
  // Prompt the user for the password length
  var length = prompt("How long would you like your password to be?");

  // If the length is less than 8 or more than 128
  if (length < 8 || length > 128) {
    // alert the user that they messed up
    alert("Your password must be between 8 and 128");
    // exit the function early, (use the return keyword)
    return "";
  }

  // What are we doing here?
  //We are creating question outputs for the user to chose what characteristics they would like for their password
  var useLowercase = confirm("Would you like to use lower case characters?");
  var useUppercase = confirm("Would you like to use upper case characters?");
  var useNumeric = confirm("Would you like to use numeric characters?");
  var useSpecial = confirm("Would you like to use special characters?");
  

  // Why is this if statement necessary?
  //This is necessary because it is alerting the user that this code can not create a password if no variables are being chosen
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("We need at least one option to be chosen.");
    return "";
  }

  // generate the password based off the criteria

  // `return` that password
  return password;
}
alert(generatePassword());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
