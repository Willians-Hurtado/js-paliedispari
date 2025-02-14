/* Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

//Chiedere all'utente di inserire una parola 
let write_a_word = prompt("Srivi una parola palindroma")
console.log(write_a_word);

//Creare una funzione per capire se la parola inserita è palindroma

function word_result(){

    const word = write_a_word.split(''); 
    const revers_word = word.reverse().join('');

    if (write_a_word === revers_word) {

    result = true;

    } else {

    result = false;

    }
    return(result)
    
}
    
word_result()

if(result === true){
    alert(`${write_a_word}:  è una parola palindroma`)
}else{
    alert(`${write_a_word}:  Non è una parola palindroma`)
}
















