const CalculateInput = ({ value, label, name }) => {
    return(
        <div className="flex flex-col mb-5">
         <label className="text-zinc-600 text-md mb-2">{label}</label>
         <input className="p-2 bg-cyan-100 rounded-xl" value={ value } name={ name } id={ name }/>
        </div>
    )
}

export default CalculateInput;