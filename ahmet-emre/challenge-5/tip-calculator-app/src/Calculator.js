import React from 'react';
import '../src/styles/calculator.css'
import { useState,useEffect } from 'react';
//Utilites
import InputArea from './Utilities/InputArea';
import ResetButton from './Utilities/ResetButton';
import Buttons from './Utilities/Buttons'
//Images
import dollarSvg from './images/icon-dollar.svg'
import personSvg from './images/icon-person.svg'
//Components
import AmountDisplayer from './components/AmountDisplayer';

const Calculator = () => {

  const [bill,changeBill] = useState(0)
  const [numberOfPeople,changenumberOfPeople] = useState()
  const [tipAmount,changetipAmount] = useState(0)
  const [totalAmount,changetotalAmount] = useState(0)

  useEffect(() => {
    // To avoid any wrong output for total amount
    let amount
    if (bill===0 || numberOfPeople === undefined || numberOfPeople === 0) amount = 0
    else amount = bill / numberOfPeople

    if ( isNaN(amount) || amount === Infinity || amount <0 ) changetotalAmount(0)
    else changetotalAmount(amount)

  },[bill,numberOfPeople])

  return(
    <>
      <div className='calculator-box'>
        <div className='calculator-leftside'>        {/* Input area for output */}
          <div className='Bill-area'>
            <InputArea 
              image={dollarSvg}
              label='Bill'
              changeBill={changeBill}
            />
          </div>
          <div className='Tip-area'>
            <Buttons 
              changetipAmount={changetipAmount}
              changetotalAmount={changetotalAmount}
              bill={bill}
              numberOfPeople={numberOfPeople}
            />
          </div>
          <div className='People-area'>
          <InputArea
            image={personSvg}
            label='Number of People'
            errorMessage="Can't be minus or zero"
            errorColor='orange'
            numberOfPeople={numberOfPeople}
            changenumberOfPeople={changenumberOfPeople}
            changetipAmount={changetipAmount}
          />
          </div>
        </div>
        <div className='calculator-rightside'>        {/* Output area and reset button */}
          <div>
          <AmountDisplayer 
            dollarSvg={dollarSvg}
            tipAmount={tipAmount}               
            totalAmount={totalAmount}         
          />
          </div>
          <div className='reset-button'>
            <ResetButton
            changeBill={changeBill}
            changenumberOfPeople={changenumberOfPeople}
            changetipAmount={changetipAmount}
            changetotalAmount={changetotalAmount}
            bill={bill}
            numberOfPeople={numberOfPeople}
          />
          </div>
        </div>
      </div>
    </>
  )
}

export default Calculator