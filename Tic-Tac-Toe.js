
const playgame = (()=> {
    function game(e){
        const playerOne = {
        Name: 'playerOne',
        Marking: 'X'
    };
    const playerTwo = {
        Name: 'PlayerTwo',
        Marking: 'O'
    };
    let currentPlayer;
    currentPlayer = playerOne;
    e.target.textContent = currentPlayer.Marking;
    if(currentPlayer === playerOne)
    {
        currentPlayer = playerTwo;
        e.target.textContent = currentPlayer.Marking;
    }else{
        currentPlayer = playerOne;
        e.target.textContent = currentPlayer.Marking;
    }
    
    
    }
    return{game}
})();

const gameBoard = (() => {
const gamefuntionlity = (rows, cols) => {
    const theBoard = document.getElementById("GameBoard");
    theBoard.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    theBoard.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    for (i=0; i<(rows * cols); i++){
    let gameDivs = document.createElement("div");
    gameDivs.addEventListener("click", playgame.game)
    theBoard.appendChild(gameDivs).classList.add("newdivgrid");
    }
};
gamefuntionlity(3,3);
})();
            
        