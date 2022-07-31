const ratingArea = document.querySelector(".rating-box-wrapper");
const resultArea = document.querySelector(".rating-result-wrapper");
const submitButton = document.querySelector(".rating-submit-input");
const numberValue = document.querySelectorAll(".numbers");
const outputText = document.querySelector(".result-text-display");
let number = '';

numberValue.forEach(function(e) {
  submitButton.setAttribute("disabled","true")
  e.addEventListener('focus',function() {
    numberValue.forEach((x) => x.classList.remove("selected"));
    e.classList.add('selected');
    submitButton.removeAttribute("disabled")

    if (number==''){
    number += e.textContent;
    console.log(number);
    } else {
      number='';
      number += e.textContent;
    }
  });
})

submitButton.addEventListener('focus',function() {
  ratingArea.style.display = "none";
  resultArea.style.display = "block";
  outputText.textContent ='You selected ' + number + ' out of 5'
});