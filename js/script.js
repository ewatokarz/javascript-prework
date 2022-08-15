/* let computerMove = `kamien`;

let playerMove = `papier`;

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!!!!!');

let randomFraction = Math.random();

printMessage('Wylosowany ulamek to: ' + randomFraction);

let calculation = randomFraction * 3 + 1;

printMessage('Ułamek pomnożony przez 3 i powiększony o 1 rowna sie: ' + calculation);

let roundNumber = Math.floor(calculation);

printMessage('Liczba po zaokragleniu w dol rowna sie: ' + roundNumber);*/




/*let randomNumber = Math.floor(Math.random() * 9) + 11;*/


/*let randomNumber = Math.floor(Math.random() * 3 + 1);

printMessage("wylosowana liczba to: " + randomNumber);

let computerMove = "nieznany ruch";

if(randomNumber == 1) {
    computerMove = "kamien";
}

console.log(computerMove);

printMessage("Moj ruch to " + computerMove);

let playerInput = prompt("wybierz swoj ruch 1: kamien, 2: papier, 3: nozyce");

console.log("Gracz wpisal: " + playerInput);

let playerMove = "nieznany ruch";

if(playerInput == '1') {
    playerMove = 'kamien';
}

printMessage('Twoj ruch to: ' + playerMove);*/


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1) {
  computerMove = 'kamien';
} else if (randomNumber == 2) {
    computerMove = 'nozyczki';
} else if (randomNumber == 3) {
    computerMove = 'papier';
}

printMessage('Ruch komputera to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
  playerMove = 'kamien';
} else if (playerInput == '2') {
    playerMove = 'nozyczki';
} else if (playerInput == '3') {
    playerMove = 'papier';
}

printMessage('Twój ruch to: ' + playerMove);

if (computerMove == 'kamien' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamien' && playerMove == 'nozyczki') {
    printMessage('Komputer wygrywa :((');
} else if (computerMove == 'kamien' && playerMove == 'kamien') {
    printMessage('Remis...');
} else if (computerMove == 'nozyczki' && playerMove == 'kamien') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'nozyczki' && playerMove == 'papier') {
    printMessage('Komputer wygrywa :((');
} else if (computerMove == 'nozyczki' && playerMove == 'nozyczki') {
    printMessage('Remis...');
} else if (computerMove == 'papier' && playerMove == 'nozyczki') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'kamien') {
    printMessage('Komputer wygrywa :((');
} else if (computerMove == 'papier' && playerMove == 'papier') {
    printMessage('Remis...');
} else {
    printMessage('Wybierz numer od 1 do 3');
  }
