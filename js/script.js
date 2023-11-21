// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//creo una funzione che genera una cella
    //creo elemento per la cella
    //aggiungo evenuali classi all'elemento

    //popolo e lo aggiungo al parent

//creo un ciclo che mi genera n celle (in questo caso 100)
    //nel ciclo genero numeri da 1 a 100 come contenuto della cella

//toggle per dare e rimuovere il colore alla cella ed emettere msg console con numero cella

const playBtnElement = document.querySelector("button.play");
console.log(playBtnElement);
playBtnElement.addEventListener("click", function() {

    for (let i = 1 ; i <= 100 ; i++){
        const currentSquare = generateSquare();
        const squareContent = i;
        currentSquare.innerHTML += `<span> ${squareContent} </span>`;
        gridWrapperElement.appendChild(currentSquare);
    
        currentSquare.addEventListener("click", function(){
            this.classList.toggle('bg-light-blue');
            console.log(squareContent);
        });
    }
});





const gridWrapperElement = document.querySelector("div.grid-wrapper");




// Funzioni
function generateSquare() {
    const generateSquareElement = document.createElement("article");
    generateSquareElement.classList.add("square");
    return generateSquareElement;
}