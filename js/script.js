function playGame(number = 1, number = 2, number = 3) {
  let kamien = document.getElementById("kamien");
  let nozyce = document.getElementById("nozyce");
  let papier = document.getElementById("papier");

  kamien.addEventListener("click", function () {
    printMessage("Wybrales kamien");
  });

  nozyce.addEventListener("click", function () {
    printMessage("Wybrales nozyce");
  });

  papier.addEventListener("click", function () {
    printMessage("Wybrales papier");
  });

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log("Wylosowana liczba to: " + randomNumber);

  let computerMove = getMoveName(randomNumber);

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return "kamien";
    } else if (argMoveId == 2) {
      return "nozyczki";
    } else if (argMoveId == 3) {
      return "papier";
    }

    printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return "nieznany ruch";
  }

  getMoveName(1);

  printMessage("Ruch komputera to: " + computerMove);

  let playerInput = prompt(
    "Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
  );

  console.log("Gracz wpisał: " + playerInput);

  let playerMove = getMoveName(playerInput);

  if (playerInput == "1") {
    playerMove = "kamien";
  } else if (playerInput == "2") {
    playerMove = "nozyczki";
  } else if (playerInput == "3") {
    playerMove = "papier";
  }
  printMessage("Twój ruch to: " + playerMove);

  function displayResult(computerMove, playerMove) {
    printMessage("Zagralem " + computerMove + " , a Ty " + playerMove);

    if (computerMove == playerMove) {
      printMessage("Remis...");
    } else if (computerMove == "kamien" && playerMove == "papier") {
      printMessage("Ty wygrywasz!");
    } else if (computerMove == "kamien" && playerMove == "nozyczki") {
      printMessage("Komputer wygrywa :((");
    } else if (computerMove == "nozyczki" && playerMove == "kamien") {
      printMessage("Ty wygrywasz!");
    } else if (computerMove == "nozyczki" && playerMove == "papier") {
      printMessage("Komputer wygrywa :((");
    } else if (computerMove == "papier" && playerMove == "nozyczki") {
      printMessage("Ty wygrywasz!");
    } else if (computerMove == "papier" && playerMove == "kamien") {
      printMessage("Komputer wygrywa :((");
    } else {
      printMessage("Wybierz numer od 1 do 3");
    }
  }

  displayResult();
}

playGame();
