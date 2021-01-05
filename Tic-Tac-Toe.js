
const playerOne = {
        Name: 'playerOne',
        Marking: 'X',
        Score: 0
    };
const playerTwo = {
        Name: 'PlayerTwo',
        Marking: 'O',
        Score: 0
    };
const playgame = (()=> {
        //players objects

    
    //A variable that makes the players take turns.
    let currentPlayer = playerOne;
    let declareWinner = false;
    let BoardSpots = 9;
    let playerturn = document.getElementById("playerTurn");
    let gameResult = document.getElementById("gameResult");
    let playerOneScore = document.getElementById("player1Results");
    let playerTwoScore = document.getElementById("player2Results");

const winPostions = [
    [0,1,2],
    [0,3,6],
    [6,7,8],
    [3,4,5],
    [0,4,8],
    [2,4,6],
    [2,5,8],
    [1,4,7],
    
];
    //how ths following function works is that it will loop through each array that's inside winpostions array. It calls the gameboard array and check if 3 of the gameBoard array elements have either player one or two marking inside of them, and if 3 of the elemets in a row match one of winpostions arries then we have a winner. 
function checkWinner(){  
winPostions.forEach((item, index) => {
    if(gameBoard.gameBoard[item[0]] === this.currentPlayer.Marking &&
      gameBoard.gameBoard[item[1]] === this.currentPlayer.Marking &&
      gameBoard.gameBoard[item[2]] === this.currentPlayer.Marking){
        
        gameResult.textContent = `GAME! ${this.currentPlayer.Name} wins`
        this.declareWinner = true;
        
        }
    })

}

function switchPlayer(){
    if(this.currentPlayer === playerOne){
        this.currentPlayer = playerTwo;
    }else{
        this.currentPlayer = playerOne;

    }
    console.log(currentPlayer.Name);
    }
    function currentPlayerTurn(){
    if(this.currentPlayer === playerOne){
        playerturn.textContent = `it\'s ${playerOne.Name}\'s turn`
    }else{
        playerturn.textContent = `it\'s ${playerTwo.Name}\'s turn`
    }
    }

    return{ 
        currentPlayer,
        checkWinner,
        declareWinner,
        BoardSpots,
        switchPlayer,
        currentPlayerTurn,
        gameResult
    };
})();
   


const gameBoard = (() => {
    
    let gameBoard = [];
    for(let i = 0; i < 9; i++ ){
        gameBoard.push('');
    }
    //A function that creates a grid in using the DOM
    let gameSquares = document.querySelector('.gameSquares');
    
    gameBoard.forEach((item, index) =>{
    const newSquares = document.createElement('div');
    newSquares.className = 'newSquares';
    newSquares.addEventListener("click", playgame.switchPlayer)
    gameSquares.appendChild(newSquares);
    });
    Array.from(gameSquares.children).forEach((square, index) => {
       square.addEventListener('click', () =>{
           square.classList.add(playgame.currentPlayer.Marking);
           square.setAttribute('data', playgame.currentPlayer.Marking);
           gameBoard[index] = playgame.currentPlayer.Marking;
           square.classList.add ="disabledClicks";
           playgame.BoardSpots -= 1;
           playgame.checkWinner();
           if(playgame.declareWinner == false){
               if(playgame.BoardSpots > 0){
                   playgame.switchPlayer();
                   playgame.currentPlayerTurn();
               }
           }else if(playgame.BoardSpots == 0){
               playgame.gameResult.textContent = "Tie Gmae!"
        
           }
           
       }) 
    });

return{
    gameBoard
};

})();

