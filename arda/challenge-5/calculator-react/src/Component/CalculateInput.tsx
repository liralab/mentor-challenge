type Props = {
    value?: number,
    label: string,
    setValue: ( value: number ) => void,
    result?: number,
    setResult: ( result: number ) => void,
    name: string
}

const CalculateInput = ({ value, label, name, setValue, result, setResult } : Props ) => {

    return(
        <div className="flex flex-col mb-5">
         <label className="text-zinc-600 text-md mb-2">{ label }</label>
         <input
             className="p-2 bg-cyan-100 rounded-xl"
             value={ value }
             name={ name }
             id={ name }
             onInput={ e => {
             setValue( Number(( e.target as HTMLInputElement).value ))
             result === 0 && setResult( Number(( e.target as HTMLInputElement).value ))
         }}/>
        </div>
    )
}

export default CalculateInput;