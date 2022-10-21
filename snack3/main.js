/* Crea un array di oggetti che rappresentano degli animali. */
/* Ogni animale ha un nome, una famiglia e una classe. */

const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
  ]

/* Crea un nuovo array con la lista dei mammiferi. */
/* Filter */
/* const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
} */

const mammiferi = animali.filter(checkMammiferi)

function checkMammiferi(paramentro) {
    return paramentro.classe == 'mammiferi'
    
}

console.log(mammiferi);