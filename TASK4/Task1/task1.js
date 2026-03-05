let scores = [10, 15, 8];

function renderScores() {

    let board = document.querySelector('.scoreboard');
    board.innerHTML = '';

    for (let i = 0; i < scores.length; i++) {

        let div = document.createElement('div');
        //creating button to increase and decrease the score
        div.innerHTML =
        '<span class="player">Player ' + (i + 1) + ':</span>' +
        '<span class="score">' + scores[i] + '</span>' +
        '<button onclick="increase(' + i + ')">+</button>' +
        '<button onclick="decrease(' + i + ')">-</button>';
        board.appendChild(div);
    }

    let highest = Math.max(...scores);
    let lowest = Math.min(...scores);

    document.querySelector('.highest').innerText = 'Highest Score: ' + highest;
    document.querySelector('.lowest').innerText = 'Lowest Score: ' + lowest;
}

function increase(index) {
    scores[index] += 1;
    renderScores();
}

function decrease(index) {
    scores[index] = scores[index] - 1;
    renderScores();
}

//calling the function
renderScores();
