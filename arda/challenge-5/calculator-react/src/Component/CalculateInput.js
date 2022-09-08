const CalculateInput = ({ value, label, name, setValue, result, setResult }) => {

    return(
        <div className="flex flex-col mb-5">
         <label className="text-zinc-600 text-md mb-2">{ label }</label>
         <input className="p-2 bg-cyan-100 rounded-xl" value={ value } name={ name } id={ name } onInput={ e => {
             setValue( Number( e.target.value ) )
             result === 0 && setResult(e.target.value )
         }}/>
        </div>
    )
}

export default CalculateInput;