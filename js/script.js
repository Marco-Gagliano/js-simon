/* 

DESCRIZIONE:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**Consigli del giorno:**
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.

*/

// PROCEDIMENTO:





// 3. CREARE 2 "SET TIMEOUT" (1 NASCONDERA' I NUMERI DOPO 5 SENCODI, 1 SARA' PER L'INSERIMENTO DEI NUMERI [PROMPT]).

// 4.1. REALIZZARE UNA FUNZIONE LEGATA AL (PROMPT) UTILIZZANDO UN CICLO FOR IN CUI "I" E' INFERIORE ALLA LUNGHEZZA DELL'ARRAY DEI NUMERI DEL PC. 





// 4.4 CREARE UNA FUNZIONE DENTRO IL CICLO FOR "CELLA NUMERI UTENTE"(SENZA CONST-LET) CHE A SUA VOLTA TRA PARENTESI CONTIENE "NUMERI UTENTE".

// 4.5 SEMPRE DENTRO ALLA FUNZIONE, INSERIRE LA VARIABILE "PUNTEGGIO(SENZA CONST-LET), DA LI INSERIRE POI FUORI IL CICLO FOR UNA VARIABILE (SENZA CONST-LET) IN CUI RIMUOVE E NASCONDE

// 5. CREARE UN FUNZIONE CON IL NOME DELLA VARIABILE "PUNTEGGIO" UTILIZZANDO DEGLI IF, ELSE IF IN CUI SI DICHARA I NUMERI INDOVINATI UTILIZZANDO "DOCUMENT.INNERHTML".

// 6. CREARE UNA FUNZIONE "NUMERI CREATI NELLE CELLE" CON SCRITTO TRA PARENTESI () IN CUI DENTRO CI VANNO LE COSTANTI IN CUI INDICHANO LE CLASSI NELL'HTML: 
// -CONSTANTE.....

// 7. CREARE UNA FUNZIONE "NUMERI UTENTI NELLE CELLE" CON SCRITTO TRA PARENTESI (NUMERI)......

// 8. CREARE UNA FUNZIONE COL NOME UGUALE AL NOME DELLA CLASSE IN CUI POI DOPO 5 SECONDI I NUMERI SCOMPAIONO

// 9. CREARE UNA FUNZIONE COL NOME "RIMUOVE E NASCONDE" COL SUO CICLO FOR INDIRIZZATO A UN SUO QUERY SELECTOR

// 10. CREARE UNA FUNZIONE COL NOME "GENERATE RANDOM NUMBER" CON LA SUA FORMULA

///////////////////////////////////////////////////////////////////////////////////

// creare una funzione
// 1. 

const secGame = 5;
let numbersGuessed = 0;
const numbersPC = [];         // array numeri random pc
const numbersUser = [];       // array numeri scritto dall'utente

init();
// 2. 

function init () {
  for (let i = 0; i < 5; i++) {5

    let randomNumber = generateRandomNumber ();
    numbersCellsUser(randomNumber);

    numbersPC.push(randomNumber)
  }

  console.log(numbersPC, 'array numeri random') ;

}
 

// 3. 

// setTimeout (numbersHide, 5000);
setTimeout (numbersInPrompt, 2000);


// 4. 

function numbersInPrompt () {
  for (let i = 0; i < 5; i++){

    let user = parseInt(prompt("Inserisci i 5 numeri che pensi siano quelli che ti ricordi"));
    while (isNaN(user)) {

      alert('Non hai inserito un numero. Riprovare');
      user = parseInt(prompt("Inserisci i 5 numeri che pensi siano quelli che ti ricordi"));
    };

    numbersUser.push(user);
    

    numbersCellsUser(user);
    scorePoint();
    numbersCorrect();

  };

  console.log(numbersUser, 'array numeri utente inseriti');

};

function numbersCorrect () {

  const correctNumbers = [];

  for (let i = 0; i < numbersPC.lenght; i++) {
    if(numbersUser.includes(numbersPC[i])) {
      correctNumbers++;
      correctNumbers.push(numbersPC[i])
    }
  }

  console.log('Numeri indovinati', numbersGuessed);

  return correctNumbers;
}


function numbersCellsUser (number){

  const numbersCells = document.createElement('div');
  numbersCells.className = 'cell-number';

  const numbersInCells = document.createElement('span');
  numbersInCells.className = 'number-in-cells';
  numbersInCells.innerHTML = number;

  const containerCells = document.querySelector('.container-cellsnumbers-pc');
  containerCells.append(numbersCells);

  numbersCells.append(numbersInCells);

  // console.log(containerCells);
}

// 5.

function scorePoint () {

  let messageToPrint = (vote, numbers) => {
    document.getElementById('vote-game').innerHTML = vote
    document.getElementById('numbers-guessed').innerHTML = numbers
  }
  
  if (correctNumbers === 0) {
    messageToPrint(`Vergognati!`, `Hai indovinato ${correctNumbers} numeri su ${correctNumbers}`)
  }
  else if (correctNumbers === 1) {
    messageToPrint(`Ma non ci siamo proprio`, `Hai indovinato ${correctNumbers} numeri su ${correctNumbers}`)
  }
  else if (correctNumbers === 2) {
    messageToPrint(`Puoi fare di meglio`, `Hai indovinato ${correctNumbers} numeri su ${correctNumbers}`)
  }
  else if (correctNumbers === 3) {
    messageToPrint(`Buono, sopra la media`, `Hai indovinato ${correctNumbers} numeri su ${correctNumbers}`)
  }
  else if (correctNumbers === 4) {
    messageToPrint(`C'eri quasi`, `Hai indovinato ${correctNumbers} numeri su ${correctNumbers}`)
  }
  else if (correctNumbers === 5) {
    messageToPrint(`Perfect Score`, `Hai indovinato ${correctNumbers} numeri su ${correctNumbers}`)
  }
}

// 5


// 6. 


// 7.

// 8. 

// 9. 

// 10. 

function generateRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
};


