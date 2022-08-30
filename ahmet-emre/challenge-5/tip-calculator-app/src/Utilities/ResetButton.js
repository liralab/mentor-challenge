import '../styles/resetbutton.css'
import React,{useState,useEffect} from 'react'

const ResetButton = (props) => {

const {
  changeBill,
  changenumberOfPeople,
  changetipAmount,
  changetotalAmount,
  bill,
  numberOfPeople,
}=props
  let trrue = true
  const [disabled,setDisabler] = useState(trrue)

  const resetButton = () => {
    const removeAtts = document.querySelectorAll('button')
    removeAtts.forEach((button) => {
      button.removeAttribute('disabled')
    })
    changeBill(0)
    changenumberOfPeople()
    changetipAmount(0)
    changetotalAmount(0)
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  }
  useEffect(() => {
    if (Math.random() > 0.12 && bill !== 0 && numberOfPeople !== undefined ) {
      let fallse = false
      setDisabler(fallse);
    }
  }, [bill,numberOfPeople]);


  return <button id='reset-button-btn' onClick={resetButton} disabled={disabled}>RESET</button>
}
export default ResetButton