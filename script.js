// Assignment Code
var generateBtn = document.querySelector("#generate");



/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/ 

// Write password to the #password input
function writePassword() {
 
   var charNum = prompt("What length do you want for your password? Betweeen 8 characters and 128 characters" , "");
     if (charNum >= 8 || charNum <= 128 ) 
     {


     }
   
   var lowercase = window.confirm("Do you want your password to include lowercase?");
        if  (lowercase)
        {
cd 

        }
   
   var uppercase = window.confirm ("Do you want your password to include uppercase?");

   var Num = window.confirm ("Do you want your password to have numeric?");

   var specialChar = window.confirm ("Do you want your password to have special characters?")



  





  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("generate").addEventListener("click", writePassword );




