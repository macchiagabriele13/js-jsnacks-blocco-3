/* Snack 2 @qui
A partire da un array di stringhe,  */

const array = ['pippo', 'PLUTO', 'Paperino']

const arrayWord = []

/* crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola. */

const newArr = array.map(myFunction)




function myFunction(num) {
for (let i = 0; i < array.length; i++) {
    const word = array[i];
    /* console.log(word); */


    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        console.log(letter);
        /* arrayWord.push(letter) */
        
    }
}

}

console.log(arrayWord);



/* Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */