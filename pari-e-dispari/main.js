/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */


//L’utente sceglie pari o dispari
let userChoice = prompt("Scegli, pari o dispari")
console.log(userChoice);


//L'utente inserisce un numero da 1 a 5
let userNum = prompt("Scegli un numero da 1 a 5")
console.log(userNum);


//Generiamo un numero random (sempre da 1 a 5) per il computer

    
function computerNum() {
    randomComputer = Math.floor(Math.random() * 5) + 1;
    console.log(randomComputer);
}
computerNum()


//Stabiliamo se la somma dei due numeri è pari o dispari
let num1 = userNum;
let num2 = randomComputer;
let sum = num1 + num2;
console.log(sum);


//Dichiariamo chi ha vinto.
if(sum % 2 === 0 && userChoice === "pari"){
    alert("Hai vinto")
}else if(sum % 2 !== 0 && userChoice === "dispari"){
    alert("hai vinto")
}else{
    alert("hai perso")
}








  
















