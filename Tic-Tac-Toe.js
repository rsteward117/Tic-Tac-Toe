const GameItems = (()=>{
    const playerSelection = document.getElementById('PlayerSelectionContainer');
    const selectionButtons = document.querySelectorAll(".playerSelectionButtons");
    const TheBoard = document.getElementById("GameBoard");
    const resultsContainer = document.getElementById("resultContainer");
    const playerOneResults = document.querySelector(".player1Results");
    const playerTwoResults = document.querySelector(".Player2Results");
    
    
return{ playerSelection, selectionButtons, TheBoard, resultsContainer, playerOneResults, playerTwoResults
}     
})();
const thePlayers= (() => {
    let score = 0;
    let typeOfPlayer;
    const playerOne;
    const playertwo;

    return{score, playerOne, playertwo, typeOfPlayer}
             
})();

const playerSelections = (() => {

function selectHumanOrAi (evt){
    let eventTarget = evt.target;
    EventTarget.classList.add("activeButton");
    let selectedPlyaer = eventTarget.dataset.player
    if(selectedPlyaer === "human")
        {
            console.log(selectedPlyaer);
        }

    }
    
}
})();
