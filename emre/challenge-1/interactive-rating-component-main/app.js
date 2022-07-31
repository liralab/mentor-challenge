const submitBtn = document.querySelector('.submit');
const tyContainer = document.querySelector('.ty-container')
const starContent = document.querySelector('.selected-rating-text')

function checkedNumber(item){
if(item > 0){
    submitBtn.addEventListener('click',function(){
        tyContainer.classList.add('show-ty-container')
        starContent.textContent = `You selected ${starPoint} of 5`
        })
    } 
}
let starPoint;
let count = 0;
const btn = document.querySelectorAll('.btn')
btn.forEach(function(e){  
e.addEventListener('click',function(c){ 
    let className = c.currentTarget.classList
    if(className.contains('1')){
        starPoint = 1
    }else if(className.contains('2')){
        starPoint = 2
    }else if(className.contains('3')){
        starPoint = 3
    }else if(className.contains('4')){
        starPoint = 4
    }else if(className.contains('5')){
        starPoint = 5
    }
    count++
    checkedNumber(count)
    })
})





