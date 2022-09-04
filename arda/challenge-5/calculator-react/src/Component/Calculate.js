import CalculateInput from "./CalculateInput";

const Calculate = () => {

    return(
        <div className="flex flex-col bg-white w-1/2 p-5">
        <CalculateInput value={0} name="bill" label="bill"/>
        <div>
            <p className="mb-5">Select Tip %</p>
            <div className="flex flex-wrap gap-2 mb-5">
                <div className="inline py-5 bg-teal-900 text-white w-[120px] text-center">5%</div>
                <div className="inline py-5 bg-teal-900 text-white w-[120px] text-center">10%</div>
                <div className="inline py-5 bg-teal-900 text-white w-[120px] text-center">15%</div>
                <div className="inline py-5 bg-teal-900 text-white w-[120px] text-center">25%</div>
                <div className="inline py-5 bg-teal-900 text-white w-[120px] text-center">30%</div>
                <div className="inline py-5 bg-teal-100 text-zinc-700 w-[120px] text-center">Custom</div>
            </div>
        </div>
        <CalculateInput value={0} name="people" label="Number of people"/>
        </div>
    )
}

export default Calculate;