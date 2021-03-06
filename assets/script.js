// Assignment Code
var generateBtn = document.querySelector("#generate");
var Numeric = "0123456789";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var Special = "!@#$%^&*";



function getRandom(str) {
  // What is going on here?
  // this will create a random grouping of the objects from the previous strings created ex. 0 x length
  var randomIndex = Math.floor(Math.random() * str.length);
  // and here?
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

  var password2 = ""
  
  for (let i = 0 ; i < length; i++) {
     if (useLowercase == true){
    password2 += getRandom(lowercase);
   }
    if (useUppercase == true){
  password2 += getRandom(uppercase);
  }
    if (useNumeric == true){
  password2 += getRandom(Numeric);
  }
     if (useSpecial == true){
   password2 += getRandom(Special);
  }
}

  // Why is this if statement necessary?
  //This is necessary because it is alerting the user that this code can not create a password if no variables are being chosen
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("We need at least one option to be chosen.");
    return "";
  }
  
  // generate the password based off the criteria
  // `return` that password
  return password2.substr(0,length);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


