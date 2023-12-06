// Function to add player to a specific position
function addPlayer(position) {
    var playerName;
    if (position === 'forwards') {
        playerName = document.getElementById('forwardPlayer1').value;
        var playerName2 = document.getElementById('forwardPlayer2').value;
        if (playerName && playerName2) {
            document.getElementById('forwards').innerHTML += '<div><p>' + playerName + '</p><button onclick="editPlayer(this)">Edit</button><button onclick="deletePlayer(this)">Delete</button></div>';
            document.getElementById('forwards').innerHTML += '<div><p>' + playerName2 + '</p><button onclick="editPlayer(this)">Edit</button><button onclick="deletePlayer(this)">Delete</button></div>';
        } else {
            console.error('Please enter both forward players');
        }
    } else if (position === 'midfielders') {
        playerName = document.getElementById('midfieldPlayer1').value;
        var playerName2 = document.getElementById('midfieldPlayer2').value;
        if (playerName && playerName2) {
            document.getElementById('mids').innerHTML += '<div><p>' + playerName + '</p><button onclick="editPlayer(this)">Edit</button><button onclick="deletePlayer(this)">Delete</button></div>';
            document.getElementById('mids').innerHTML += '<div><p>' + playerName2 + '</p><button onclick="editPlayer(this)">Edit</button><button onclick="deletePlayer(this)">Delete</button></div>';
        } else {
            console.error('Please enter both midfielder players');
        }
    } else if (position === 'goalies') {
        playerName = document.getElementById('goaliePlayer').value;
        if (playerName) {
            document.getElementById('goalies').innerHTML += '<div><p>' + playerName + '</p><button onclick="editPlayer(this)">Edit</button><button onclick="deletePlayer(this)">Delete</button></div>';
        } else {
            console.error('Please enter the goalie');
        }
    }
}

// Function to submit team
function submitTeam() {
    var selectedPlayersDiv = document.getElementById('selected-players');

    // Clear current player names
    selectedPlayersDiv.innerHTML = '';

    // Clear current player names within divs
    var forwards = document.getElementById('forwards').getElementsByTagName('input');
    var mids = document.getElementById('mids').getElementsByTagName('input');
    var goalies = document.getElementById('goalies').getElementsByTagName('input');

    for (var i = 0; i < forwards.length; i++) {
        forwards[i].value = '';
    }

    for (var i = 0; i < mids.length; i++) {
        mids[i].value = '';
    }

    for (var i = 0; i < goalies.length; i++) {
        goalies[i].value = '';
    }

    // Gather and display selected players
    var forwardsPlayers = document.getElementById('forwards').getElementsByTagName('p');
    var midfieldersPlayers = document.getElementById('mids').getElementsByTagName('p');
    var goaliesPlayers = document.getElementById('goalies').getElementsByTagName('p');

    var formattedPlayers = '';

    formattedPlayers += 'Forward: ';
    for (var i = 0; i < forwardsPlayers.length; i++) {
        formattedPlayers += forwardsPlayers[i].textContent + ' ';
    }

    formattedPlayers += '<br>Midfielder: ';
    for (var i = 0; i < midfieldersPlayers.length; i++) {
        formattedPlayers += midfieldersPlayers[i].textContent + ' ';
    }

    formattedPlayers += '<br>Goalie: ';
    for (var i = 0; i < goaliesPlayers.length; i++) {
        formattedPlayers += goaliesPlayers[i].textContent + ' ';
    }

    selectedPlayersDiv.innerHTML = formattedPlayers;
}

// Function to edit players after submission
function editPlayers(position) {
    var players = document.getElementById(position).getElementsByTagName('p');
    for (var i = 0; i < players.length; i++) {
        players[i].innerHTML += '<button onclick="editPlayer(this)">Edit</button><button onclick="deletePlayer(this)">Delete</button>';
    }
}

// Function to edit a single player
function editPlayer(element) {
    var playerName = element.parentNode.firstChild.textContent;
    var updatedName = prompt('Enter updated name for ' + playerName);
    if (updatedName) {
        element.parentNode.firstChild.textContent = updatedName;
    }
}

// Function to delete a single player
function deletePlayer(element) {
    element.parentNode.remove();
}
