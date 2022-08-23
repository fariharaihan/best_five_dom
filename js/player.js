
//------ selected five player list part-------//

const bestPlayers = [];

function selectedBest(players) {
    const playerList = document.getElementById('selected-player');
    playerList.innerText = '';

    for (let i = 0; i < players.length; i++) {
        const name = bestPlayers[i].selectPlayerName;

        const ul = document.createElement('li');
        ul.innerText = name;

        playerList.appendChild(ul);
    }

}

function addToList(element) {
    element.disabled = true;

    const selectPlayerName = element.parentNode.children[0].innerText;

    const playerObj = {
        selectPlayerName: selectPlayerName
    }

    bestPlayers.push(playerObj);

    selectedBest(bestPlayers);

}

// -----Budget part-----//

//-----------Total player expenses part-----------//

document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPleyarfield = document.getElementById('per-player-amount');
    const perPleyarAmountString = perPleyarfield.value;
    const perPleyarAmount = parseFloat(perPleyarAmountString);


    // const selectedPlayer = document.getElementById('selected-player')
    const playerNum = bestPlayers.length;


    const playerTotal = document.getElementById('player-total-expense');
    const playerTotalExpensestring = playerTotal.innerText;


    playerTotal.innerText = perPleyarAmount * playerNum;
    const playerTotalExpense = parseFloat(playerTotalExpensestring);


});

//---------Total cost calculate part---------//

document.getElementById('calculate-btn-total').addEventListener('click', function () {
    const playerTotal = document.getElementById('player-total-expense');
    const playerTotalAmountString = playerTotal.innerText;
    const playerTotalAmount = parseFloat(playerTotalAmountString);


    const manegerCost = document.getElementById('maneger-cost');
    const manegerTotalCostString = manegerCost.value;
    const manegerTotalCost = parseFloat(manegerTotalCostString);


    const coachCost = document.getElementById('coach-cost');
    const coachTotalCostString = coachCost.value;
    const coachTotalCost = parseFloat(coachTotalCostString);


    const totalExpenses = document.getElementById('total-expence');
    const totalExpenseAmount = totalExpenses.innerText;
    totalExpenses.innerText = playerTotalAmount + manegerTotalCost + coachTotalCost;

});





