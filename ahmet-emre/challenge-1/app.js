const ratingArea = document.querySelector(".rating-box-wrapper");
const resultArea = document.querySelector(".rating-result-wrapper");
const submitButton = document.querySelector(".rating-submit-input");
const numberValue = document.querySelectorAll(".numbers");
const outputText = document.querySelector(".result-text-display");
let number = '';

for (let a=0; a < numberValue.length; a++) {
  submitButton.setAttribute("disabled","true")
  numberValue[a].addEventListener('focus',(e)=> {
    numberValue.forEach((x) => x.classList.remove("selected"));
    numberValue[a].classList.toggle('selected');
    submitButton.removeAttribute("disabled")
    if (number==''){
    number += numberValue[a].textContent;
    console.log(number);
    } else {
      number='';
      number += numberValue[a].textContent;
    }
  });
}

submitButton.addEventListener('focus',function() {
  ratingArea.style.display = "none";
  resultArea.style.display = "block";
  outputText.textContent ='You selected ' + number + ' out of 5'
});