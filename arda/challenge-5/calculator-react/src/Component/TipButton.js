const TipButton = ({ tip, setTip }) => {

    return(
        <>
        <button
            onClick={() => setTip(tip) }
            className={`inline py-5 ${typeof tip === "number" ? 'bg-teal-900 text-white' : 'bg-cyan-100 text-zinc-600'} w-[120px] text-center`}>
            { tip }{ typeof tip === "number" ? '%' : '' }
        </button>
        </>
    )
}

export default TipButton;