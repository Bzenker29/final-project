// Function to add players
function addPlayer(column) {
    var playerName = "";
    var columnElement = document.getElementById(column);

    // Get the player names from input fields based on the column
    if (column === 'forwards') {
        var forwardPlayer1 = document.getElementById('forwardPlayer1').value;
        var forwardPlayer2 = document.getElementById('forwardPlayer2').value;
        playerName = forwardPlayer1 + ", " + forwardPlayer2;
    } else if (column === 'midfielders') {
        var midfieldPlayer1 = document.getElementById('midfieldPlayer1').value;
        var midfieldPlayer2 = document.getElementById('midfieldPlayer2').value;
        playerName = midfieldPlayer1 + ", " + midfieldPlayer2;
    } else if (column === 'goalies') {
        playerName = document.getElementById('goaliePlayer').value;
    }

    if (playerName.trim() !== "") {
        var newPlayer = document.createElement("p");
        newPlayer.textContent = playerName;
        columnElement.appendChild(newPlayer);
    }
}

// Function to submit team
function submitTeam() {
    var forwards = document.getElementById('forwards').getElementsByTagName('p');
    var midfielders = document.getElementById('mids').getElementsByTagName('p');
    var goalies = document.getElementById('goalies').getElementsByTagName('p');

    var selectedPlayers = [];

    for (var i = 0; i < forwards.length; i++) {
        selectedPlayers.push(forwards[i].textContent);
    }

    for (var i = 0; i < midfielders.length; i++) {
        selectedPlayers.push(midfielders[i].textContent);
    }

    for (var i = 0; i < goalies.length; i++) {
        selectedPlayers.push(goalies[i].textContent);
    }

    var displayArea = document.getElementById('selected-players');
    displayArea.innerHTML = '';

    for (var i = 0; i < selectedPlayers.length; i++) {
        var player = document.createElement('p');
        player.textContent = selectedPlayers[i];
        displayArea.appendChild(player);
    }
}
