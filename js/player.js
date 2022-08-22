


const bestPlayers = [];

function selectedBest(players) {
    const playerList = document.getElementById('selected-player');
    playerList.innerText = '';
    for (let i = 0; i < players.length; i++) {

        const Name = bestPlayers[i].selectPlayerName;

        const ol = document.createElement('li');


        ol.innerText = Name;
        playerList.appendChild(ol);

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

