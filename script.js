let password = document.querySelector(".display input");

let passLength = 10;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialChars = "!@~$%^&*()_-+=><?/[]{}";
let allChars = upperCase + lowerCase + numbers + specialChars;

function generatePass() {
  let pass = "";
  pass += upperCase[Math.floor(Math.random() * upperCase.length)];
  pass += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  pass += numbers[Math.floor(Math.random() * numbers.length)];
  pass += specialChars[Math.floor(Math.random() * specialChars.length)];

  while (pass.length < passLength) {
    pass += allChars[Math.floor(Math.random() * allChars.length)];
  }
  password.value = pass;
}

function copyPass() {
  password.select();
  document.execCommand("copy");
}
