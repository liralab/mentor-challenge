const questions = document.querySelectorAll(".faq-question-header");
questions.forEach(x =>  {
  x.addEventListener('click', function(){
    x.classList.toggle('active');
    const questionAnswer= x.nextElementSibling;
    if (questionAnswer.style.maxHeight == 0){
      questionAnswer.style.maxHeight = questionAnswer.scrollHeight + 'px';
    } else {
      questionAnswer.style.maxHeight = null;
    }
    const questionIcon = x.firstElementChild;
    questionIcon.classList.toggle('rotate');
  });
});
