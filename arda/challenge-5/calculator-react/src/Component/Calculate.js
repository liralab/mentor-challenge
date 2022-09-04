import CalculateInput from "./CalculateInput";
import TipButton from "./TipButton";

const values = [5,10,15,25,50, 'Custom']

const Calculate = () => {

    return(
        <div className="flex flex-col bg-white w-1/2 p-5">
        <CalculateInput value={0} name="bill" label="bill"/>
        <div>
            <p className="mb-5">Select Tip %</p>
            <div className="flex flex-wrap gap-2 mb-5">
                {
                    values.map( value => <TipButton value={value}/> )
                }
            </div>
        </div>
        <CalculateInput value={0} name="people" label="Number of people"/>
        </div>
    )
}

export default Calculate;