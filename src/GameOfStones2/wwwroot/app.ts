//Defines the arrays used
let rowA = ["o", "o", "o", "o", "o"];
let rowB = ["o", "o", "o", "o", "o"];
let rowC = ["o", "o", "o", "o", "o"];

//loads and show's the current stone piles
function displayBoard() {
    document.getElementById("a5").innerHTML = rowA[0];
    document.getElementById("a4").innerHTML = rowA[1];
    document.getElementById("a3").innerHTML = rowA[2];
    document.getElementById("a2").innerHTML = rowA[3];
    document.getElementById("a1").innerHTML = rowA[4];

    document.getElementById("b5").innerHTML = rowB[0];
    document.getElementById("b4").innerHTML = rowB[1];
    document.getElementById("b3").innerHTML = rowB[2];
    document.getElementById("b2").innerHTML = rowB[3];
    document.getElementById("b1").innerHTML = rowB[4];

    document.getElementById("c5").innerHTML = rowC[0];
    document.getElementById("c4").innerHTML = rowC[1];
    document.getElementById("c3").innerHTML = rowC[2];
    document.getElementById("c2").innerHTML = rowC[3];
    document.getElementById("c1").innerHTML = rowC[4];
}

//calls the displayBoard function
displayBoard();

//checks to see if all stones have been removed, if not inititates the computer's move.
function checkIfGameOver() {
    if (rowA.length == 0 && rowB.length == 0 && rowC.length == 0) {
        alert("You win");
        //alert("I win! Bow before your master, fleshy mortal!");
    } else {
        computersTurn();
    }
}

//defines the what happens once the player makes a selection/gives input.
let btn = document.getElementById('btn');
btn.addEventListener(`click`, function getUserRow() {
    let selectBox = document.getElementById("inputRow");
    let inputRow = selectBox.options[selectBox.selectedIndex].value;
    let inputNumber = document.getElementById("inputNumber").value;
    if (inputRow == "A") {
        rowA.splice(0, inputNumber)
    } else if (inputRow == "B") {
        rowB.splice(0, inputNumber)
    } else if (inputRow == "C") {
        rowC.splice(0, inputNumber)
    } else {
        alert("Error, try again you fool.")
    }
    alert(`You chose ${inputRow} ${inputNumber}`);
    displayBoard();
    checkIfGameOver();
});

//defines the computer's behavior on it's turn
function computersTurn() {
    displayBoard();
    alert("My turn");
    if (rowA.length >= 1) {
        rowA.splice(0, (Math.ceil(Math.random() * rowA.length)))
    } else if (rowB.length >= 1) {
        rowB.splice(0, (Math.ceil(Math.random() * rowB.length)))
    } else if (rowC.length >= 1) {
        rowC.splice(0, (Math.ceil(Math.random() * rowC.length)))
    } else {
        displayBoard();
        alert("You won!!! ... I hate you.");
    }
    displayBoard();
}