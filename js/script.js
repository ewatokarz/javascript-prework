let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/* if(randomNumber == 1) {
  computerMove = 'kamien';
} else if (randomNumber == 2) {
    computerMove = 'nozyczki';
} else if (randomNumber == 3) {
    computerMove = 'papier';
} */

/*printMessage('Ruch komputera to: ' + computerMove);*/


function getMoveName(argMoveId) {
    if (argMoveId == 1) {
    return 'kamien';
} else if (argMoveId == 2) {
    return 'nozyczki';
} else if (argMoveId == 3) {
    return 'papier';
}

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

printMessage('Ruch komputera to: ' + computerMove);



/* function getMoveName(argMoveId) {
    let argMoveId = Math.floor(Math.random() * 3 + 1);

    if (argMoveId === 1) {
        return 'kamien';
    }

    else if (argMoveId === 2) {
        return 'nozyczki';
    }

    else if (argMoveId === 3) {
        return 'papier';
    }

    else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
} */


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

/*let playerMove = 'nieznany ruch';*/

let playerMove = getMoveName;


if (playerInput == '1') {
  playerMove = 'kamien';
} else if (playerInput == '2') {
    playerMove = 'nozyczki';
} else if (playerInput == '3') {
    playerMove = 'papier';
}

printMessage('Twój ruch to: ' + playerMove);

/*if (computerMove == playerMove && playerMove == 'papier') {
    printMessage('Remis...');
} else if (computerMove == 'kamien' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamien' && playerMove == 'nozyczki') {
    printMessage('Komputer wygrywa :((');
} else if (computerMove == 'nozyczki' && playerMove == 'kamien') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'nozyczki' && playerMove == 'papier') {
    printMessage('Komputer wygrywa :((');
} else if (computerMove == 'papier' && playerMove == 'nozyczki') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'kamien') {
    printMessage('Komputer wygrywa :((');
} else {
    printMessage('Wybierz numer od 1 do 3');
}*/

function displayResult(computerMove, playerMove) {
printMessage('Zagralem ' + computerMove + ' , a Ty ' + playerMove);

    if (computerMove == playerMove) {
        printMessage('Remis...');
    } else if (computerMove == 'kamien' && playerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    } else if (computerMove == 'kamien' && playerMove == 'nozyczki') {
        printMessage('Komputer wygrywa :((');
    } else if (computerMove == 'nozyczki' && playerMove == 'kamien') {
        printMessage('Ty wygrywasz!');
    } else if (computerMove == 'nozyczki' && playerMove == 'papier') {
        printMessage('Komputer wygrywa :((');
    } else if (computerMove == 'papier' && playerMove == 'nozyczki') {
        printMessage('Ty wygrywasz!');
    } else if (computerMove == 'papier' && playerMove == 'kamien') {
        printMessage('Komputer wygrywa :((');
    } else {
        printMessage('Wybierz numer od 1 do 3');
      }
} 

displayResult();
