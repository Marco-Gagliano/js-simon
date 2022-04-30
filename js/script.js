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


let counter = 6;
// let numbersGuessed = 0;
const numeriTotali = 5;
const numeriRandomPc = [];         // array numeri random pc
const numeriUtente = [];       // array numeri scritto dall'utente
const randomNumbers = [];
const numeriIndovinati = [];

init();
// 2. 

function init () {
  for (let i = 0; i < numeriTotali; i++) {

    let randomNumber = generateRandomNumber ();
    numbersCellsUser(randomNumber);

    numeriRandomPc.push(randomNumber);
  }

  console.log(numeriRandomPc, 'array numeri random') ;
}
 

// 3. 
const clock = setInterval (count, 1000);

 function count () {
  counter--;

  // console.log(counter);

  document.getElementById('description').innerHTML = `Hai tempo ${counter} secondi per memorizzare i numeri che compaiono nei riquadri prima che scompaiono.<br>Ricordali bene e scrivi negli appositi riquadri`;

  if (counter < 1) {

    clearInterval(clock);
    document.getElementById('description').innerHTML = '';

    console.log('fine');
  }
}


// 4. 
setTimeout (numbersInPrompt, 6000);
setTimeout (hide, 5800);

function hide () {

  const hideNumbers = document.getElementsByClassName('number-in-cells');
  // hideNumbers.classList.add('hide') 

  for (i = 0; i < hideNumbers.length; i++) {
    hideNumbers[i].classList.add('hide');
  }
}


function numbersInPrompt () {
  for (let i = 0; i < numeriTotali; i++){

    let user = parseInt(prompt("Inserisci i 5 numeri che pensi siano quelli che ti ricordi"));
    while (isNaN(user)) {

      alert('Non hai inserito un numero. Riprovare');
      user = parseInt(prompt("Inserisci i 5 numeri che pensi siano quelli che ti ricordi"));
    };

    numeriUtente.push(user);
    numbersCellsUser(user);
  };
  

  console.log(numeriUtente, 'array numeri utente inseriti');
  remove();
  numbersCorrect();
  scorePoint();
};


function remove () {

  const hideNumbers = document.getElementsByClassName('number-in-cells');
  // hideNumbers.classList.add('hide') 

  for (i = 0; i < hideNumbers.length; i++) {
    hideNumbers[i].classList.remove('hide');
  }
};


function numbersCorrect () {

  for (let i = 0; i < numeriUtente.length; i++) {
    if(numeriRandomPc.includes(numeriUtente[i])) {
      numeriIndovinati.push(numeriUtente[i]);
    }
  }
  console.log('Numeri indovinati', numeriIndovinati);
};


function numbersCellsUser (number){

  const numbersCells = document.createElement('div');
  numbersCells.className = 'cell-number';

  const numbersInCells = document.createElement('span');
  numbersInCells.className = 'number-in-cells mx-4';
  numbersInCells.innerHTML = number;

  const containerCells = document.querySelector('.container-cellsnumbers-pc');
  containerCells.append(numbersCells);

  numbersCells.append(numbersInCells);

  // console.log(containerCells);
};

// 5.

function scorePoint () {

  const voteGame = document.getElementById('vote-game');

  
  if (numeriIndovinati.length === 0) {
    voteGame.innerHTML = `Vergognati! Hai indovinato ${numeriIndovinati.length} numeri su ${numeriTotali}`
  }
  else if (numeriIndovinati.length === 1) {
    voteGame.innerHTML = `Ma non ci siamo proprio. Hai indovinato ${numeriIndovinati.length} numeri su ${numeriTotali}`
  }
  else if (numeriIndovinati.length === 2) {
    voteGame.innerHTML = `Puoi fare di meglio. Hai indovinato ${numeriIndovinati.length} numeri su ${numeriTotali}`
  }
  else if (numeriIndovinati.length === 3) {
    voteGame.innerHTML = `Buono, sopra la media. Hai indovinato ${numeriIndovinati.length} numeri su ${numeriTotali}`
  }
  else if (numeriIndovinati.length === 4) {
    voteGame.innerHTML = `C'eri quasi. Hai indovinato ${numeriIndovinati.length} numeri su ${numeriTotali}`
  }
  else if (numeriIndovinati.length === 5) {
    voteGame.innerHTML = `Perfect Score. Hai indovinato ${numeriIndovinati.length} numeri su ${numeriTotali}`
  }

  console.log(numeriIndovinati.length);
};


function generateRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
};


