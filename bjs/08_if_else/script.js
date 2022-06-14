let minValue = parseInt(prompt('Минимальное знание числа для игры', '0')) || 0;
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100')) || 100;
minValue = (minValue < -999) ? -999 : minValue;
maxValue = (maxValue > 999) ? 999 : maxValue;
if (maxValue < minValue) {
    minValue = 0;
    maxValue = 100;
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;


document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round( Math.random()*2);
            let taskError = ["Что то тут не так \u{1F914}","Обманываешь? \u{1F928}","Жулик! \u{1F925}"];
            const answerPhrase = (taskError[phraseRandom]);
            answerField.innerText = answerPhrase;

            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.round((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()*2);
            let taskError = [`Я знал, это число ${answerNumber }?`,`Это ${answerNumber }?`,`А может это ${answerNumber }?`];
            const answerPhrase = (taskError[phraseRandom]);
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            let taskError = ["Что то тут не так \u{1F914}","Обманываешь? \u{1F928}","Жулик! \u{1F925}"];
            const answerPhrase = (taskError[phraseRandom]);

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random()*2);
            let taskError = [`Я знал, это число ${answerNumber }?`,`Это ${answerNumber }?`,`А может это ${answerNumber }?`];
            const answerPhrase = (taskError[phraseRandom]);
            answerField.innerText = answerPhrase;
        }
    }
})


document.getElementById('btnRetry').addEventListener('click', function () {
    orderNumber = 1;
    minValue = parseInt(prompt('Минимальное значение числа для игры','0')) || 0;
    maxValue = parseInt(prompt('Максимальное значе числа для игры','100')) || 100;
    minValue = (minValue < -999) ? -999 : minValue;
    maxValue = (maxValue > 999) ? 999 : maxValue;
    if (maxValue < minValue) {
        minValue = 0;
        maxValue = 100;
    }
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
answerNumber  = Math.floor((minValue + maxValue) / 2);
answerField.innerText = `Вы загадали число ${answerNumber }?`;
orderNumberField.innerText = orderNumber;

gameRun = true;
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        const phraseRandom = Math.round( Math.random()*2);
        let taskError = ["Это было изи\n\u{1F60E}","Давай еще сыграем! \u{1F60A}","Еще попытку хочешь? \u{1F917}"];
        const answerPhrase = (taskError[phraseRandom]);
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

