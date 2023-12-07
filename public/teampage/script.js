const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
};


window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
};

function addPlayer(position) {
    var playerName;
    if (position === 'forwards') {
        var forwardPlayer1 = document.getElementById('forwardPlayer1').value;
        var forwardPlayer2 = document.getElementById('forwardPlayer2').value;
        if (forwardPlayer1 && forwardPlayer2) {
            document.getElementById('forwards').innerHTML += '<div><p>' + forwardPlayer1 + '</p><button onclick="editPlayer(this)">Edit</button><button onclick="deletePlayer(this)">Delete</button></div>';
            document.getElementById('forwards').innerHTML += '<div><p>' + forwardPlayer2 + '</p><button onclick="editPlayer(this)">Edit</button><button onclick="deletePlayer(this)">Delete</button></div>';
        } else {
            console.error('Please enter both forward players');
        }
    } else if (position === 'midfielders') {
        var midfieldPlayer1 = document.getElementById('midfieldPlayer1').value;
        var midfieldPlayer2 = document.getElementById('midfieldPlayer2').value;
        if (midfieldPlayer1 && midfieldPlayer2) {
            document.getElementById('mids').innerHTML += '<div><p>' + midfieldPlayer1 + '</p><button onclick="editPlayer(this)">Edit</button><button onclick="deletePlayer(this)">Delete</button></div>';
            document.getElementById('mids').innerHTML += '<div><p>' + midfieldPlayer2 + '</p><button onclick="editPlayer(this)">Edit</button><button onclick="deletePlayer(this)">Delete</button></div>';
        } else {
            console.error('Please enter both midfielder players');
        }
    } else if (position === 'goalies') {
        var goaliePlayer = document.getElementById('goaliePlayer').value;
        if (goaliePlayer) {
            document.getElementById('goalies').innerHTML += '<div><p>' + goaliePlayer + '</p><button onclick="editPlayer(this)">Edit</button><button onclick="deletePlayer(this)">Delete</button></div>';
        } else {
            console.error('Please enter the goalie');
        }
    }
}

function submitTeam() {
    var selectedPlayersDiv = document.getElementById('selected-players');

    // Clear current player names
    selectedPlayersDiv.innerHTML = '';

    // Gather and display selected players
    var forwardsPlayers = document.getElementById('forwards').getElementsByTagName('p');
    var midfieldersPlayers = document.getElementById('mids').getElementsByTagName('p');
    var goaliesPlayers = document.getElementById('goalies').getElementsByTagName('p');

    var formattedPlayers = '<strong>Selected Players:</strong><br>';

    formattedPlayers += 'Forward: ';
    for (var i = 0; i < forwardsPlayers.length; i++) {
        formattedPlayers += forwardsPlayers[i].textContent;
        if (i < forwardsPlayers.length - 1) {
            formattedPlayers += ', '; // Add a comma for separation except for the last player
        }
    }

    formattedPlayers += '<br>Midfielder: ';
    for (var i = 0; i < midfieldersPlayers.length; i++) {
        formattedPlayers += midfieldersPlayers[i].textContent;
        if (i < midfieldersPlayers.length - 1) {
            formattedPlayers += ', '; // Add a comma for separation except for the last player
        }
    }

    formattedPlayers += '<br>Goalie: ';
    for (var i = 0; i < goaliesPlayers.length; i++) {
        formattedPlayers += goaliesPlayers[i].textContent;
        if (i < goaliesPlayers.length - 1) {
            formattedPlayers += ', '; // Add a comma for separation except for the last player
        }
    }

    selectedPlayersDiv.innerHTML = formattedPlayers;
}


function editPlayer(element) {
    var playerName = element.parentNode.firstChild.textContent;
    var updatedName = prompt('Enter updated name for ' + playerName);
    if (updatedName) {
        element.parentNode.firstChild.textContent = updatedName;
    }
}

function deletePlayer(element) {
    element.parentNode.remove();
}
