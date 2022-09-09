const ResultInput = ({ content, group, amount }) => {
    console.log('this is for what')
    return(
        <div className="flex justify-between px-10 py-5">
            <div>
              <p className="text-white text-xl">{ content }</p>
              <p className="text-zinc-400 text-sm">/ { group }</p>
            </div>
            <div className="flex items-center">
              <span className="text-3xl text-green-300">$</span>
              <span className="text-5xl text-green-300">{ amount }</span>
            </div>
        </div>
    )
}

export default ResultInput;