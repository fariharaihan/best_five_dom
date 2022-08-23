


const bestPlayers = [];

function selectedBest(players) {
    const playerList = document.getElementById('selected-player');
    playerList.innerText = '';



    for (let i = 0; i < players.length; i++) {
        const name = bestPlayers[i].selectPlayerName;

        const ol = document.createElement('li');
        ol.innerText = name

        playerList.appendChild(ol);

        if (i >= 4) {
            alert('Only five Players are allowed');
            return;
        }

    }

}
function selectPlayer(element) {

    const selectPlayerName = element.parentNode.children[0].innerText;

    const playerObj = {
        selectPlayerName: selectPlayerName

    }

    bestPlayers.push(playerObj);


    selectedBest(bestPlayers);
    // console.log(bestPlayers);
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPleyarfield = document.getElementById('per-player-amount');
    const perPleyarAmountString = perPleyarfield.value;
    const perPleyarAmount = parseFloat(perPleyarAmountString);
    console.log(perPleyarAmount);


    const selectedPlayer = document.getElementById('selected-player');
    const playerNum = bestPlayers.length;
    console.log(playerNum);


    const playerTotal = document.getElementById('player-total-expense');
    const playerTotalExpensestring = playerTotal.innerText;
    playerTotal.innerText = perPleyarAmount * playerNum;
    const playerTotalExpense = parseFloat(playerTotalExpensestring);


})
document.getElementById('calculate-btn-total').addEventListener('click', function () {
    const playerTotal = document.getElementById('player-total-expense');
    const playerTotalAmountString = playerTotal.innerText;
    const playerTotalAmount = parseFloat(playerTotalAmountString);
    console.log(playerTotalAmount);


    const manegerCost = document.getElementById('maneger-cost');
    const manegerTotalCostString = manegerCost.value;
    const manegerTotalCost = parseFloat(manegerTotalCostString);


    const coachCost = document.getElementById('coach-cost');
    const coachTotalCostString = coachCost.value;
    const coachTotalCost = parseFloat(coachTotalCostString);


    const totalExpenses = document.getElementById('total-expence');
    const totalExpenseAmount = totalExpenses.innerText;
    totalExpenses.innerText = playerTotalAmount + manegerTotalCost + coachTotalCost;

})





