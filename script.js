// Assignment Code
var generateBtn = document.querySelector("#generate");

// 4 variables with our options
var lowercase = ['a','b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z']

var uppercase  = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var symbols = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
]


// 1 prompts and 4 confirms

var lowerCaseConfirm = confirm('would you like lowercase letters')
var upperCaseConfirm = confirm('would you like uppercase letters')
var numbersConfirm = confirm('would you like numbers')
var symbolsConfirm = confirm('would you like symbols')
var passwordlength = prompt('how long do you want your password to be')

// characterCatcher variable

var characterCatcher = []

// check confirm variable
for(i = 0; i < passwordlength; i++){
  if( characterCatcher.length < passwordlength){
    if(lowerCaseConfirm == true){
    characterCatcher.push(lowercase[Math.floor(Math.random()*lowercase.length)])
  };
  if(upperCaseConfirm == true ){
    characterCatcher.push(uppercase[Math.floor(Math.random()*uppercase.length)])
  };
  if(numbersConfirm == true ){
    characterCatcher.push(numbers[Math.floor(Math.random()*numbers.length)])
  };
  if(symbolsConfirm == true ){
    characterCatcher.push(symbols[Math.floor(Math.random()*symbols.length)])
  }
  }
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword (){
  console.log (characterCatcher)
  var passwordstring = ""
  for ( var i = 0 ; i < passwordlength; i++){ 
    passwordstring += characterCatcher [Math.floor(Math.random()*characterCatcher.length)]
  }
  return passwordstring 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
