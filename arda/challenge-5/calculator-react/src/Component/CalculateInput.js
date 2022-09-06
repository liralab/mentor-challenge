const CalculateInput = ({ setResult, value, label, name, setValue, tip }) => {

    return(
        <div className="flex flex-col mb-5">
         <label className="text-zinc-600 text-md mb-2">{ label }</label>
         <input className="p-2 bg-cyan-100 rounded-xl" value={ value } name={ name } id={ name } onChange={ e => {
             setValue( Number( e.target.value ) )
             Number(e.target.value) !== 0 ? setResult(0) : setResult( Number( e.target.value ) +  Number( tip ) )
         }}/>
        </div>
    )
}

export default CalculateInput;