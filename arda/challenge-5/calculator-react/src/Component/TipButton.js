const TipButton = ({value,setTip,onClick}) => {
    return(
        <>
        <button
            onClick={() => {
                setTip(value)
                onClick()
            }}
            className={`inline py-5 ${typeof value === "number" ? 'bg-teal-900 text-white' : 'bg-cyan-100 text-zinc-600'} w-[120px] text-center`}>
            { value }{ typeof value === "number" ? '%' : '' }
        </button>
        </>
    )
}

export default TipButton;