var boardArray = [];

const playgame = (()=> {
        //players objects
        const playerOne = {
        Name: 'playerOne',
        Marking: 'X'
    };
    const playerTwo = {
        Name: 'PlayerTwo',
        Marking: 'O'
    };
    
    //A variable that makes the players take turns.
    let currentPlayer;
    currentPlayer = playerTwo;
    
    //A function that checks to see who is the current player and marking X or O depending who's turn it is. 
    function playerControls(e){
    e.target.textContent = currentPlayer.Marking;
    if(currentPlayer === playerOne)
    {
        currentPlayer = playerTwo;
        e.target.textContent = currentPlayer.Marking;
        e.target.classList.add("disabledClicks");
    }else{
        currentPlayer = playerOne;
        e.target.textContent = currentPlayer.Marking;
        e.target.classList.add("disabledClicks");
    }

    }

    return{playerControls, playerOne, playerTwo}
})();

const gameBoard = (() => {
    
    //A function that creates a grid in using the DOM    
const makeBoard = (rows, cols) => {
    let theBoard = document.getElementById("GameBoard");
    theBoard.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    theBoard.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    for (i=0; i<(rows * cols); i++){
    let gameDivs = document.createElement("div");
    gameDivs.addEventListener("click", playgame.playerControls)
    
    //Pushes gameDivs inside theBoard array
    boardArray.push(gameDivs);
    theBoard.appendChild(gameDivs).classList.add("newdivgrid");
    }
};
makeBoard(3,3);
})(); 
    
    //Hopefully a function that can check who is the winner
function checkWinner(){
console.log(boardArray[0]);
console.log(boardArray[0].textContent);
if(boardArray[0].innerHTML === playgame.playerOne.Marking){
    console.log("win");
}

}
checkWinner();
