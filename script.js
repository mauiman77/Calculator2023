function lookUpNum(item) {
    buttonTable = {'one': 1, 'two' : 2, 'three' : 3, 'four' : 4, 'five': 5, 'six' : 6, 'seven' : 7, 'eight' : 8, 'nine' : 9,
    'zero' : 0, 'dot' : '.', 'plus' : '+', 'minus' : '-', 'multiply': '*', 'divide' : '/', 'equals' : '='};
    return buttonTable[item];
}

function addToDisplay(toAdd) {
    const screen = document.querySelector('.screen > p');
    screen.textContent += toAdd;
}

function addToScreen(btn) {
    const idOfBtn = document.getElementById(btn);
    const toAddToDisplay = lookUpNum(idOfBtn);
    addToDisplay(toAddToDisplay);
}

const btns = document.querySelectorAll('button')
btns.forEach((btn) => btn.addEventListener('click', (b) => addToScreen(b)))