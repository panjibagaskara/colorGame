let gameLevel = document.querySelector('.active').textContent;
let hardBox = document.getElementById('hardBox');
let easyBox = document.getElementById('easyBox');
let hardButton = document.getElementById('hardButton');
let easyButton = document.getElementById('easyButton');
let boxBehavior = document.getElementsByClassName('box');
let numOfBox = document.querySelectorAll('#hardBox .box');
let gameQuestion = document.getElementById('question');
let gameInfo = document.getElementById('info');
let gameAnswer = boxColoring(numOfBox);
let gameOver = false;
gameQuestion.textContent = gameAnswer.toUpperCase();

for (let i = 0; i < boxBehavior.length; i++) {
    boxBehavior[i].addEventListener('click', function(){
        if (!gameOver){
            let color = this.style.background;
            if (color !== gameAnswer) {
                gameInfo.textContent = 'Try Again!';
                this.classList.add('hidden-box');
            } else {
                gameInfo.textContent = 'Correct!';
                document.getElementById('title').style.background = color;
                boxColoringFinish(numOfBox, color);
                document.getElementById('resetButton').textContent = 'Play Again?';
                gameOver = true;
            }
        }
    });
}

hardButton.addEventListener('click', function(){
    easyBox.classList.add('d-none');
    hardBox.classList.remove('d-none');
    hardButton.classList.add('active');
    easyButton.classList.remove('active');
    numOfBox = document.querySelectorAll('#hardBox .box');
    reset();
    
});

easyButton.addEventListener('click', function(){
    hardBox.classList.add('d-none');
    easyBox.classList.remove('d-none');
    easyButton.classList.add('active');
    hardButton.classList.remove('active');
    numOfBox = document.querySelectorAll('#easyBox .box');
    reset();    
});

resetButton.addEventListener('click', reset);

function reset(){
    gameAnswer = boxColoring(numOfBox);
    gameOver = false;
    gameQuestion.textContent = gameAnswer.toUpperCase();
    document.getElementById('resetButton').textContent = 'NEW COLORS';
    document.getElementById('title').style.background = 'purple';
    gameInfo.textContent = '';
}

function randRGB(num){
    let arrColor = [];
    let r, g, b;
    for(let i = 0; i < num; i++) {
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);
        arrColor.push('rgb(' + r + ', ' + g + ', ' + b +')');
    }
    return arrColor;
}

function pickAnswer(arr) {
    return Math.floor(Math.random() * arr.length);
}

function boxColoring(listOfBox) {
    let arrColor = randRGB(listOfBox.length);
    let correctAns = arrColor[pickAnswer(listOfBox)];
    for (let i = 0; i < listOfBox.length; i++){
        listOfBox[i].style.background = arrColor[i];
    }
    return correctAns;
}

function boxColoringFinish(numOfBox, color) {
    for (let i = 0; i < numOfBox.length; i++) {
        numOfBox[i].classList.remove('hidden-box');
        numOfBox[i].style.background = color;
    }
}