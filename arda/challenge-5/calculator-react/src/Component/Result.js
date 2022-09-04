import ResultInput from "./ResultInput";

const Result = () => {
    return(
        <div className="bg-teal-900 w-1/2 p-10 rounded-2xl flex flex-col justify-between">
            <div>
                <ResultInput content="Tip Amount" group="person" amount={0.00}/>
                <ResultInput content="Total" group="person" amount={0.00}/>
            </div>
          <button className="bg-cyan-700 text-cyan-900 w-full p-2 rounded-md">RESET</button>
        </div>
    )
}

export default Result;