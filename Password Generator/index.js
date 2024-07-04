const characters =["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4",
 "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&",
 "*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
 "<",">",".","?",
"/"];

let password1 = [];
let password2 = [];
let passwordLength = 10; //Default length

let passwordEl1 = document.getElementById("password1");
let passwordEl2 = document.getElementById("password2");
let lengthErrorEl = document.getElementById("lengthError");

function password() {
    // Get password length from input field
    passwordLength = parseInt(document.getElementById("pwLength").value);

    if (passwordLength < 8 || passwordLength > 20) {
        lengthErrorEl.textContent = "Password length must be between 8 and 20 characters.";
        passwordEl1.style.display = "none";
        passwordEl2.style.display = "none";
        return; 
    } else {
        lengthErrorEl.textContent = ""; 
    }
    // Generate first password
    for (let i = 0; i < passwordLength; i++) {
        password1.push(characters[Math.floor(Math.random() * characters.length)]);
    }
    let unique1 = password1.join('');
    passwordEl1.textContent = unique1;
    password1 = []; // Clear password1 

    // Generate second password
    for (let i = 0; i < passwordLength; i++) {
        password2.push(characters[Math.floor(Math.random() * characters.length)]);
    }
    let unique2 = password2.join('');
    passwordEl2.textContent = unique2;
    password2 = []; // Clear password2 

    var element1 = document.getElementById("password1");
    var element2 = document.getElementById("password2");
    element1.style.display = "block";
    element2.style.display = "block";
}





