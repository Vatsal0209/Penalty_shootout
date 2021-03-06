let score = [0, 1]

var team1 = {
    name: "Real Madrid ",
    runs: [],
    score: 0
}

var team2 = {
    name: "Huesca",
    runs: [],
    score: 0
}

var turn;


window.onload = () => {
    selectTurn();  //Deciding the toss
    updateButton(); //Updating the button name and result
    updateScore(); // Updating the scire iin the score board
    updateRuns();
}


//Es6 was of writing functions
selectTurn = () => {
    turn = Math.round(Math.random()) + 1;
}

//Traditional way of writing function
function updateButton() {
    var button = document.getElementById("strike-button");
    var result = document.getElementById("result")

    result.style.visibility = "";

    button.textContent = `${turn === 1 ? team1.name : team2.name} Strike`

    if (team1.runs.length == 6 && team2.runs.length == 6) {
        button.remove();

        result.textContent = team1.score === team2.score ? 'Draw Match' : team1.score > team2.score ? team1.name + " Wins!" : team2.name + " Wins!"
    }
    else {
        turn = team1.runs.length === 6 ? 2 : team2.runs.length === 6 ? 1 : turn;
    }
}


updateScore = () => {

    document.getElementById("team-1-score").textContent = team1.score;
    document.getElementById("team-2-score").textContent = team2.score;
}

var handleStrikebutton = () => {

    var runs = score[Math.floor(Math.random() * score.length)]

    // runs = runs ===5 ? 'W' : runs

    if (turn === 1) {
        team1.runs.push(runs)
        team1.score = calculateScore(team1.runs)
        console.log(team1.score)
    }
    else {
        team2.runs.push(runs)
        team2.score = calculateScore(team2.runs)
        console.log(team1.score)
    }
    updateButton();
    updateRuns()
    updateScore()
}

var calculateScore = (runs) => {
    return runs.map((run) => {
        return run == 'W' ? 0 : run;
    }
    ).reduce((total, runs) => total + runs)
}

updateRuns = () => {
    var teamOneRoundElement = document.getElementById("team-1-round-runs").children;
    var teamTwoRoundElement = document.getElementById("team-2-round-runs").children;

    team1.runs.forEach((run, index) => {
        teamOneRoundElement[index].style.background = run == 1 ? 'green' : 'red';
    })
    team2.runs.forEach((run, index) => {
        teamTwoRoundElement[index].style.background = run == 1 ? 'green' : 'red';
    })
}
