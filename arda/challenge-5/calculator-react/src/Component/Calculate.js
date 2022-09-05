import CalculateInput from "./CalculateInput";
import TipButton from "./TipButton";
import {useEffect, useState} from "react";

const values = [5,10,15,25,50, 'Custom'];

const Calculate = ( { setResult } ) => {
    const [ bill, setBill ] = useState(0);
    const [ tip, setTip ] = useState(0 );
    const [ peopleCount, setPeopleCount ] = useState(0);

    function handleSubmit(){

        setResult( ( bill * tip ) / 100 );
    }

    return(
        <div className="flex flex-col bg-white w-1/2 p-5">
        <CalculateInput value={bill} setValue={setBill} name="bill" label="bill" tip={tip} setResult={setResult} />
        <div>
            <p className="mb-5">Select Tip %</p>
            <div className="flex flex-wrap gap-2 mb-5">
                {
                    values.map( value => <TipButton value={ value } setTip = { setTip } onClick={handleSubmit} /> )
                }
            </div>
        </div>
        <CalculateInput value={peopleCount} setValue={setPeopleCount} name="people" label="Number of people"/>
        </div>
    )
}

export default Calculate;