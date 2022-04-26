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

// 1. CREARE 4 VARIABILI (INDICARE I SECONDI, NUMERI DA RICORDARE, NUMERI CHE SCRIVE IL PC [ARRAY], NUMERI CHE SCRIVE L'UTENTE [ARRAY], )

// 2. REALIZZARE UNA "FUNCTION INIT" CON "FOR" CON DENTRO UNA COSTANTE IN CUI "NUMERI DA RICORDARE" E' UGUALE A "NUMERI CREATI NELLE CELLE" E TULIZZARE IL "PUSH" SUI NUMERI DEL PC METTENDO TRA PARENTESI "I NUMERI DA RICORDARE"

// 3. CREARE 2 "SET TIMEOUT" (1 NASCONDERA' I NUMERI DOPO 5 SENCODI, 1 SARA' PER L'INSERIMENTO DEI NUMERI [PROMPT]).

// 4.1. REALIZZARE UNA FUNZIONE LEGATA AL (PROMPT) UTILIZZANDO UN CICLO FOR IN CUI "I" E' INFERIORE ALLA LUNGHEZZA DELL'ARRAY DEI NUMERI DEL PC. 

// 4.2 SEMPRE DENTRO AL CICLO FOR, CREARE UNA COSTANTE "UTENTE" CHE SARA' UN "PARSEINT-PROMPT" IN CUI SCRIVERO' I NUMERI CHE MI RICORDO; 

// 4.3 CREARE UN CICLO WHILE IN CUI SE VIENE SCRITTO QUALCOSA CHE NON SIA NUMERO, METTERE ALERT E FARE IL PROMPT; 

// 4.4 CREARE UNA VARIABILE DENTRO IL CICLO FOR "CELLA NUMERI UTENTE"(SENZA CONST-LET) CHE A SUA VOLTA TRA PARENTESI CONTIENE "NUMERI UTENTE".

// 4.5 SEMPRE DENTRO ALLA FUNZIONE, INSERIRE LA VARIABILE "PUNTEGGIO(SENZA CONST-LET), DA LI INSERIRE POI FUORI IL CICLO FOR UNA VARIABILE (SENZA CONST-LET) IN CUI RIMUOVE E NASCONDE

// 5. CREARE UN FUNZIONE CON IL NOME DELLA VARIABILE "PUNTEGGIO" UTILIZZANDO DEGLI IF, ELSE IF IN CUI SI DICHARA I NUMERI INDOVINATI UTILIZZANDO "DOCUMENT.INNERHTML".

// 6. CREARE UNA FUNZIONE "NUMERI CREATI NELLE CELLE" CON SCRITTO TRA PARENTESI () IN CUI DENTRO CI VANNO LE COSTANTI IN CUI INDICHANO LE CLASSI NELL'HTML: 
// -CONSTANTE.....

// 7. CREARE UNA FUNZIONE "NUMERI UTENTI NELLE CELLE" CON SCRITTO TRA PARENTESI (NUMERI)......

// 8. CREARE UNA FUNZIONE COL NOME UGUALE AL NOME DELLA CLASSE IN CUI POI DOPO 5 SECONDI I NUMERI SCOMPAIONO

// 9. CREARE UNA FUNZIONE COL NOME "RIMUOVE E NASCONDE" COL SUO CICLO FOR INDIRIZZATO A UN SUO QUERY SELECTOR

// 10. CREARE UNA FUNZIONE COL NOME "GENERATE RANDOM NUMBER" CON LA SUA FORMULA

///////////////////////////////////////////////////////////////////////////////////


// 1. 

const secGame = 5;
let numbersGuessed = 0;
const numbersPC = [];
const numbersUser = [];


// 2. 

function init () {
  for (let i = 0; i < 5; i++) {
    const numbersRemember = numbersCells;
    numbersPC.push(numbersRemember);
  }
}


// 3. 

setTimeout (numbersHide, 5000);
// setTimeout (numbersInPrompt, 5000);


// 4. 

function numbersInPrompt () {
  for (let i = 0; i < numbersPC.array; i++){

    const user = parseInt(prompt("Inserisci i 5 numeri che pensi siano quelli che ti ricordi"));
    while (isNaN(user)) {

      alert('Non hai inserito un numero. Riprovare');
      user = parseInt(prompt("Inserisci i 5 numeri che pensi siano quelli che ti ricordi"));
    };

    numbersCellsUser(numbersUser);
    scorePoint();
  };
};


// 5. 

function scorePoint () {
  if (numbersGuessed === 0) {
    document.getElementById('vote-game').innerHTML = `Vergognati!`; 

    document.getElementById('numbers-guessed').innerHTML = `Hai indovinato ${numbersGuessed} numeri su ${numbersUser}`;
  }
  else if (numbersGuessed === 1) {
    document.getElementById('vote').innerHTML = `Ma non ci siamo proprio`; 

    document.getElementById('numbers-guessed').innerHTML = `Hai indovinato ${numbersGuessed} numeri su ${numbersUser}`;
  }
  else if (numbersGuessed === 2) {
    document.getElementById('vote').innerHTML = `Puoi fare di meglio`; 

    document.getElementById('numbers-guessed').innerHTML = `Hai indovinato ${numbersGuessed} numeri su ${numbersUser}`;
  }
  else if (numbersGuessed === 3) {
    document.getElementById('vote').innerHTML = `Buono, sopra la media`; 

    document.getElementById('numbers-guessed').innerHTML = `Hai indovinato ${numbersGuessed} numeri su ${numbersUser}`;
  }
  else if (numbersGuessed === 4) {
    document.getElementById('vote').innerHTML = `C'eri quasi`; 

    document.getElementById('numbers-guessed').innerHTML = `Hai indovinato ${numbersGuessed} numeri su ${numbersUser}`;
  }
  else if (numbersGuessed === 5) {
    document.getElementById('vote').innerHTML = `Perfect Score`; 

    document.getElementById('numbers-guessed').innerHTML = `Hai indovinato ${numbersGuessed} numeri su ${numbersUser}`;
  }
}


// 6. 

// 7.

// 8. 

// 9. 

// 10. 

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


