/*
* дістати кнопку з id=uniqq і зробити її фоновий колір синій
*/
// document.getElementById('uniqq').style.backgroundColor = 'blue';
// const uniqq = document.getElementById('uniqq');
// console.dir(uniqq);
// uniqq.style.backgroundColor = 'blue';
// uniqq.style.color = 'white';
/*
* зібрати всі елементи з класом btn і зробити їх блочними
*/
const buttons = document.getElementsByClassName('btn');
for (const button of buttons) {
    // console.dir(button.style);
    button.style.display = 'block';
    button.addEventListener('click', () => {
        button.style.fontSize = '32px'
    });
}
/*
* на кожну кнопку додати слухача події click і по кліку встановити розмір тексту = 32px
*/