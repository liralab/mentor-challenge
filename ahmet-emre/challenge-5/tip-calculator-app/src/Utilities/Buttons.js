import React from "react"
import '../styles/buttons.css'

const Buttons = ({
  changetipAmount,changetotalAmount,bill,numberOfPeople,
  }) => {
  
  const customTip = (e) => {
    let customtip = parseInt(e.target.value)
    if (bill !== 0 && numberOfPeople !== undefined && !isNaN(customtip) ) {
      let calc = bill / numberOfPeople
      let value = (calc* customtip) / 100
      changetipAmount(value)
      changetotalAmount(calc+value)
    }
  }
  const tipCalculator = (e) => {
    const buttons = document.querySelectorAll('#buton')
    buttons.forEach((x) => {
      x.removeAttribute('disabled')
    })
    if (bill !== 0 && numberOfPeople !== undefined) {
      let calc = bill / numberOfPeople
      let value = (calc* e.target.value) / 100
      changetipAmount(value)
      changetotalAmount(calc+value)
      e.target.setAttribute('disabled', '')
    }
  }

  let percentages=['5%','10%','15%','25%','50%']
  let buttonLoop = percentages.map((perc,index) => {
  let numberpect = parseInt(perc.replace(/\D/g, ""))
    return <button key={index} id='buton' onClick={tipCalculator} value={numberpect}>{perc}</button>
  })

  return (
    <>
      <div className="tip-header">Select Tip %</div>
      <div className="buttons">
        {buttonLoop}
        <input onBlur={customTip} placeholder="Custom" type="text" pattern="/^\d*[1-9]\d*$/" />
      </div>
    </>
  )
}
export default Buttons