import ResultInput from "./ResultInput";

type Props = {
    result: number,
    totalTip: number,
    setResult: ( result: number ) => void,
    setTotalTip: ( totalTip: number ) => void
}

const Result = ({ result, totalTip, setResult, setTotalTip } : Props ) => {
    const resetAll = () => {
        setResult( 0 );
        setTotalTip( 0 );
    }

    return(
        <div className="bg-teal-900 w-1/2 p-10 rounded-2xl flex flex-col justify-between">
            <div>
                <ResultInput content="Tip Amount" group="person" amount={ totalTip } />
                <ResultInput content="Total" group="person" amount={ result } />
            </div>
          <button className="bg-cyan-700 text-cyan-900 w-full p-2 rounded-md" onClick={resetAll}>RESET</button>
        </div>
    )
}

export default Result;


