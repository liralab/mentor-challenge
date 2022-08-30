import React from "react";
import '../styles/inputarea.css'

const InputArea = (props) => {
  const {
    image,
    label,
    errorMessage,
    errorColor,
    numberOfPeople,
    changeBill,
    changenumberOfPeople,
    changetipAmount
  } = props

  let errorStyle = numberOfPeople <=0 ? {display:'block'} : {display:'none'}
  let inputStyle = numberOfPeople <=0 ? {outline:'2px solid', outlineColor:errorColor} : {outline:'none'}



  const handleChange = async e => {
    let value = e.target.value
    if (label=== 'Bill') {await changeBill(value)}
    else {
      await changenumberOfPeople(value)
      changetipAmount(0)
      }
    }

  return (
    <> 
      <div className="input-logo">
        <img src={image} alt='input-logo' />
      </div>
      <div className="input-label">
        {label}
      </div>
      <input id='inputNumber' onChange={handleChange} style={inputStyle} type="number" min="0"  placeholder='0' />
      <div style={errorStyle} className="error-label">
        {errorMessage}
      </div>
    </>
  )
}
export default InputArea