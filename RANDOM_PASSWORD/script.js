const generateBtn = document.querySelector('#generate-btn')
const passwordInput = document.querySelector('#password')
const copyBtn = document.querySelector('#copyBtn')

const numbers = '123456789';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = lowerCase.toUpperCase();
const symbols = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

const allChar = upperCase + lowerCase + symbols + numbers

// length = 8-16
// min lowercase = 4-6
// upperCase = 2-4
// symbol = 1-3
// number = 1-3


let lenghtOfPassword = Math.floor(Math.random() * (16 - 8) + 8);


function generatePassword(){
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]

    while (lenghtOfPassword > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }

    return password;
}


generateBtn.addEventListener('click' , (e) => {
    let password = generatePassword();
    passwordInput.value = password;
    
})


// For COpy Btn Add
copyBtn.addEventListener('click' ,async () => {
  navigator.clipboard.writeText(passwordInput.value) // return a promise
 
})


// for Past Btn Add 

// copyBtn.addEventListener('click' , async () => {
  
//     const text = await navigator.clipboard.readText();
//     console.log("Pasted text: ", text);

// })