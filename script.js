var generation = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function myFunction() {
  alert("Hello! I am an alert box!");
}

writePassword();
