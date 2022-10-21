/* Snack 1:
Crea un array composto da 10 automobili. */

let automobili = [
    {
        marca: 'Fiat',
        modello: 'Tipo',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Ford',
        modello: 'Puma',
    alimentazione: 'Elettrico'
    },
    {
        marca: 'Volkswagen',
        modello: 'Up',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Cupra',
        modello: 'Formentor',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Seat',
        modello: 'Leon',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Audi',
        modello: 'Q4',
    alimentazione: 'Elettrico'
    },
    {
        marca: 'Skoda',
        modello: 'Octavia',
    alimentazione: 'Elettrico'
    },
    {
        marca: 'Pegeuot',
        modello: '206',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Dr',
        modello: 'Luno',
        alimentazione: 'Metano'
    },
    {
        marca: 'Dacia',
        modello: 'Duster',
        alimentazione: 'Gpl'
    },
]



/* Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano). */


/* Dividi le automobili in 3 array separati:
 nel primo array solo le auto a benzina,
nel secondo solo le auto a diesel, 
nel terzo il resto delle auto. */

/* Documentazione
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
} */


const benzinaCar = automobili.filter(checkGas);
function checkGas(motore) {
    return motore.alimentazione == 'Benzina'
    
}

console.log(benzinaCar);

const dieselCar = automobili.filter(checkDiesel);
function checkDiesel(motore) {
    return motore.alimentazione == 'Diesel'
    
}

console.log(dieselCar);

const gplCar = automobili.filter(checkGpl);
function checkGpl(motore) {
    return motore.alimentazione == 'Gpl'
    
}

console.log(gplCar);


/* Infine stampa separatamente i 3 array. */