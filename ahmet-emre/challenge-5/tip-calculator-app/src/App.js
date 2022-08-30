import React from 'react';
import '../src/styles/base.css'
// Image
import splitterLogo from '../src/images/logo.svg'
// Components
import Calculator from './Calculator'
import Footer from './components/Footer'

const App = () => {
  return(
    <>
    <div className='container'>
      <div className='logo'>
        <img src={splitterLogo} alt='calculator-logo' />
      </div>
      <div className='calculator-wrapper'>
        <Calculator />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App