const grid = document.querySelector(".container");
const submit = document.querySelector(".form-form");
const clearGrid = document.querySelector(".clear");
const discoGrid = document.querySelector (".disco");
const eraseGrid = document.querySelector(".eraser");
let isDrawing = false;

function randomNumber () {
    return Math.floor(Math.random() * 255);
}

function darkerColor () {
    
}

let randomColor = "";

function draw (e) {
    e.preventDefault();

    /*Remove existing grid before creating a new one*/
    let items = document.querySelectorAll(".container div");
    if (items.length > 0) {
        for (i = 0; i < items.length; i++) {
          items[i].remove();
        }
    }

    let newBox = "";
    let colNumber = "";
    colNumber = document.querySelector('input[type="text"]').value;
    if (colNumber > 100 | colNumber < 2 ) {
        alert('Minimum size: 2\nMaximum size: 100');
        return 0;
    }
    else if (colNumber.match(/[0-9]/) === null) {
        alert('FUCK OFF!');
        return 0;        
    }
    grid.style.cssText = `grid-template-columns: repeat(${colNumber}, 1fr);`

    let divNumber = colNumber * colNumber;
    for (i = 0; i < divNumber; i++) {
        newBox = document.createElement('div');
        newBox.className = 'item';
    grid.appendChild(newBox);
    }
}

function clear () {
    let items = document.querySelectorAll(".container div");
    for (i = 0; i < items.length; i++) {  
        items[i].style.backgroundColor = 'white';
    }
}

grid.addEventListener('mousedown', function() {
    isDrawing = true;
});

grid.addEventListener('mouseup', function() {
    isDrawing = false;
});

function eraser () {
    grid.addEventListener('mouseover', function(e) {
        if (!isDrawing) {
            return;
        }
        e.target.style.backgroundColor = "rgb(255, 255, 255)";
    });
}

function disco () {
    grid.addEventListener('mouseover', function(e) {
        randomColor = "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ')';
        if (!isDrawing) {
            return;
        }
        e.target.style.backgroundColor = randomColor;
    });
}

function darker () {
    grid.addEventListener('mouseover', function(e) {

    })
}

function lighter () {

}

submit.addEventListener('submit', draw);
clearGrid.addEventListener('click', clear);
discoGrid.addEventListener('click', disco);
eraseGrid.addEventListener('click', eraser);