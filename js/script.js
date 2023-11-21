// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//creo una funzione che genera una cella
    //creo elemento per la cella
    //aggiungo evenuali classi all'elemento
    //se serve lo popolo
    //lo aggiungo al parent

//creo un ciclo che mi genera n celle (in questo caso 100)

//creo un ciclo che genera numeri da 1 a 100 come contenuto della cella

//toggle per dare e rimuovere il colore alla cella ed emettere msg console con numero cella

const wrapperElement = document.querySelector("div.grid-wrapper");

for (let i = 0; i < 100; i++) {
    wrapperElement.appendChild(generateSquare());
}

function generateSquare() {
    const divElement = document.createElement("div");
    divElement.classList.add("square");
    return divElement;
}