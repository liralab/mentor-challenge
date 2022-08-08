const arrowBtn = document.querySelectorAll('.arrow-button');
const answer = document.querySelector('.answer');
const question = document.querySelector('.question');
const questionCol = document.querySelectorAll('.question-col');


questionCol.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const button = e.currentTarget
        button.classList.toggle('toggle')
    })
})