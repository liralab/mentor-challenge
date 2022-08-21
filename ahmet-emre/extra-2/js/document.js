const formData = document.querySelector(".form")
const errorIcon = document.querySelector(".coming-soon-error-icon")
const errorText = document.querySelector(".coming-soon-error-text")
const emailStyle = document.getElementById("email")

const validateEmail = (email) => {
  if (
  email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ) == null) {
  return false; }
  else{
    return true;
  } };

formData.addEventListener('submit', function(event) {
  event.preventDefault();
  const emailValue = document.getElementById("email").value;

  if (emailValue == '' || validateEmail(emailValue)== false ){
    errorIcon.classList.add('activer');
    errorText.classList.add('activer');
    emailStyle.classList.add('color-changer');
  } else{
    errorIcon.classList.remove('activer');
    errorText.classList.remove('activer');
    emailStyle.classList.remove('color-changer');
    window.alert("Registration Completed!");
  }
});

