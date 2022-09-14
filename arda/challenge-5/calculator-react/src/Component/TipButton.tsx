import React from 'react';

type Props = {
  tip?: number,
  setTip: ( tip: number ) => void;
}

const TipButton = ({ tip, setTip } : Props ) => {
    return(
    <>
      <button
        onClick={() => setTip( tip ?? 0 ) }
        className={`inline py-5 ${ typeof tip === "number" ? 'bg-teal-900 text-white' : 'bg-cyan-100 text-zinc-600'} w-[120px] text-center`}>
        { tip }{ typeof tip === "number" ? '%' : '' }
      </button>
    </>
    )
}

export default TipButton;