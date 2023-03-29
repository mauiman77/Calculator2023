
const buttonTable = {'one': 1, 'two' : 2, 'three' : 3, 'four' : 4, 'five': 5, 'six' : 6, 'seven' : 7, 'eight' : 8, 'nine' : 9,
'zero' : 0, 'dot' : '.', 'plus' : ' + ', 'minus' : ' - ', 'multiply': ' * ', 'divide' : ' / ', 'equals' : '='};

function addToDisplay(toAdd) {
    console.log(toAdd)
    const screen = document.querySelector('.screen > p');
    if (toAdd === '=') {
        screen.textContent = calculate();
        return
    }
    screen.textContent += toAdd;
}

function addToScreen(btn) {
    const toAddToDisplay = buttonTable[btn];
    addToDisplay(toAddToDisplay);
}

function calculate(){
    let toEvaluate = document.querySelector('.screen').textContent;
    let toArr = toEvaluate.split(' ');

    switch(toArr[1]) {
        case '-':
            return Number(toArr[0]) - Number(toArr[2]);
        case '+':
            return Number(toArr[0]) + Number(toArr[2]);
        case '/':
            return Number(toArr[0]) / Number(toArr[2]);
        case '*':
            return Number(toArr[0]) * Number(toArr[2]);
    }
}

const btns = document.querySelectorAll('button')
btns.forEach((btn) => btn.addEventListener('click', () => {
    addToScreen(btn.getAttribute('id'))
}
));