import '../styles/amountdisplayer.css'

const AmountDisplayer = ({
  dollarSvg,
  tipAmount,
  totalAmount,
  }) => {

  return(
    <>
    <div className='Tip-amount'>
    <div className='amount-left'>
      <div className='amountshower'>Tip Amount</div>
      <div className='amount-sub'>/ person</div>
    </div>
    <div className='amount-displayer'><img src={dollarSvg} alt='input-logo' /> {tipAmount.toFixed(2)}</div>
  </div>
  <div className='Total-amount'>
    <div className='amount-left'>
      <div className='amountshower'>Total Amount</div>
      <div className='amount-sub'>/ person</div>
    </div>
    <div className='amount-displayer'><img src={dollarSvg} alt='input-logo' /> {totalAmount.toFixed(2)}</div>
  </div>
  </>
  )
}
export default AmountDisplayer