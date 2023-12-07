const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
};


window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
};


const winnersData = [
    {
        "season": "2022-23",
        "winner": "Manchester City",
        "loser": "Inter Milan",
        "score": "1-0"
    },
    {
        "season": "2021-22",
        "winner": "Real Madrid",
        "loser": "Liverpool",
        "score": "1-0"
    },
    {
        "season": "2020-21",
        "winner": "Chelsea",
        "loser": "Manchester City",
        "score": "1-0"
    },
    {
        "season": "2019-20",
        "winner": "Bayern Munich",
        "loser": "Paris Saint-Germain",
        "score": "1-0"
    },
    {
        "season": "2018-19",
        "winner": "Liverpool",
        "loser": "Tottenham Hotspur",
        "score": "2-0"
    },
    {
        "season": "2017-18",
        "winner": "Real Madrid",
        "loser": "Liverpool",
        "score": "3-1"
    },
    {
        "season": "2016-17",
        "winner": "Real Madrid",
        "loser": "Juventus",
        "score": "4-1"
    },
    {
        "season": "2015-16",
        "winner": "Real Madrid",
        "loser": "Atletico Madrid",
        "score": "1-1(5-3 Penalties)"
    },
    {
        "season": "2014-15",
        "winner": "Barcelona",
        "loser": "Juventus",
        "score": "3-1"
    },
    {
        "season": "2013-14",
        "winner": "Real Madrid",
        "loser": "Atletico Madrid",
        "score": "4-1"
    },
    {
        "season": "2012-13",
        "winner": "Bayern Munich",
        "loser": "Borussia Dortmund",
        "score": "2-1"
    },
    {
        "season": "2011-12",
        "winner": "Chelsea",
        "loser": "Bayern Munich",
        "score": "1-1(4-3 Penalties)"
    },
    {
        "season": "2010-11",
        "winner": "Barcelona",
        "loser": "Manchester United",
        "score": "3-1"
    },
    {
        "season": "2009-10",
        "winner": "Inter Milan",
        "loser": "Bayern Munich",
        "score": "2-0"
    },
    {
        "season": "2008-09",
        "winner": "Barcelona",
        "loser": "Manchester United",
        "score": "2-0"
    },
    {
        "season": "2007-08",
        "winner": "Manchester United",
        "loser": "Chelsea",
        "score": "1-1(6-5 Penalties)"
    },
    {
        "season": "2006-07",
        "winner": "AC Milan",
        "loser": "Liverpool",
        "score": "2-1"
    },
    {
        "season": "2005-06",
        "winner": "Barcelona",
        "loser": "Arsenal",
        "score": "2-1"
    },
    {
        "season": "2004-05",
        "winner": "Liverpool",
        "loser": "AC Milan",
        "score": "3-3(3-2 Penalties)"
    },
    {
        "season": "2003-04",
        "winner": "Porto",
        "loser": "Monaco",
        "score": "3-0"
    }
];

// Access the winnersList div
const winnersList = document.getElementById('winnersList');

// Creating HTML content to display the winners' information
let winnersHTML = '<h2>UEFA Champions League Winners</h2>';
winnersHTML += '<ul>';

// Loop through the JSON data and create list items
winnersData.forEach(winner => {
    winnersHTML += `<li>${winner.season}: ${winner.winner} - ${winner.loser} (${winner.score})</li>`;
});

winnersHTML += '</ul>';

// Insert the HTML content into the winnersList div
winnersList.innerHTML = winnersHTML;
