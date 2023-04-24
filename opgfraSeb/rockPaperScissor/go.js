const possibleMoves = ["Saks", "Sten", "Papir"];

function whoWon(player1, player2) {
    if (player1 === player2) {
        return 0;
    }
    if ((player1 === "Saks" && player2 === "Papir") || (player1 === "Sten" && player2 === "Saks") || (player1 === "Papir" && player2 === "Sten")) {
        return 1;
    }
    return 2;
}

function opponentMove() {
    let moveIndex = Math.floor(Math.random() * 3);
    return possibleMoves[moveIndex];
}

// console.log("2", whoWon("Saks", "Sten"));
// console.log("1", whoWon("Saks", "Papir"));
// console.log("0", whoWon("Saks", "Saks"));
// console.log("0", whoWon("Sten", "Sten"));
// console.log("1", whoWon("Sten", "Saks"));
// console.log("2", whoWon("Sten", "Papir"));
// console.log("1", whoWon("Papir", "Sten"));
// console.log("2", whoWon("Papir", "Saks"));
// console.log("0", whoWon("Papir", "Papir"));


function playRockPaperScissor(playerMove) {
    console.log("=====================")
    console.log(`Du spillede ${playerMove}`)
    let ggg = opponentMove()
    console.log(`Pc spillede ${ggg}`)
    let won = whoWon(ggg, playerMove)

    if (won === 0) {
        console.log("Uafgjort");
    } else if (won === 1) {
        console.log("PC vinder");
    } else {
        console.log("Du vinder");
    }
}


/*
* play(myMove) {
*
* 1  get opponent move
*
* 2  print "PC played x move"
*
* 3  find out who won
*
* 4  print "Pc won" or "Player win" or "It's a tie"
*
* }
* */

playRockPaperScissor("Saks");
playRockPaperScissor("Papir");
playRockPaperScissor("Sten");
playRockPaperScissor("Papir");
playRockPaperScissor("Sten");
playRockPaperScissor("Papir");


