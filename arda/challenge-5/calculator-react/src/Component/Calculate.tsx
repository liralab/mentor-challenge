import CalculateInput from "./CalculateInput";
import TipButton from "./TipButton";
import {useEffect, useState} from "react";

type Props = {
    setResult: ( item: number ) => void,
    setTotalTip: ( item: number ) => void,
    result: number
}

const values = [5,10,15,25,50, 'Custom'];

const Calculate = ( { setResult, setTotalTip, result } : Props ) => {
    const [ totalTip, setTipTotal ] = useState(0);
    const [ bill, setBill ] = useState(0);
    const [ tip, setTip ] = useState(0 );
    const [ peopleCount, setPeopleCount ] = useState(0);

    useEffect(() => {
        calculateTip( tip, peopleCount, bill );
        calculateBill( totalTip, bill );

        if( !bill ) {
            setTotalTip( 0 );
            setResult( 0 );
        }

    },[ tip, bill, peopleCount, totalTip ]);

    const calculateTip = ( tip: number, peopleCount: number, bill:number ) => {

        if( bill && !peopleCount ) {
            let tipRate = ( bill * tip ) / 100
            setTotalTip( tipRate )

        } else if( bill && peopleCount ) {
            let tipRate = ( bill * tip ) / 100
            setTipTotal( tipRate * peopleCount )
            setTotalTip( totalTip )
        }
    }

    const calculateBill = ( totalTip : number, bill: number ) => {
        if( bill ) {
        setResult( totalTip + ( bill  * peopleCount ));
        } else {
            setResult( 0 )
        }
    }

    return(
        <div className="flex flex-col bg-white w-1/2 p-5">
            <CalculateInput value={ bill } setValue={ setBill } name="bill" label="bill" setResult={setResult} result={result} />
            <div>
                <p className="mb-5">Select Tip %</p>
                <div className="flex flex-wrap gap-2 mb-5">
                    {
                        values.map( ( tip, index) => <TipButton tip={ tip } setTip = { setTip } key ={ index } /> )
                    }
                </div>
            </div>
            <CalculateInput value={ peopleCount } setValue={ setPeopleCount } name="people" label="Number of people" tip={tip} result={result} setResult={setResult}/>
        </div>
    )
}

export default Calculate;