import CalculateInput from "./CalculateInput";
import TipButton from "./TipButton";
import {useEffect, useState} from "react";

const values = [5,10,15,25,50, 'Custom'];

const Calculate = ( { setResult, setTotalTip } ) => {
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

    const calculateTip = ( tip, person, bill ) => {
        let newTip = Number(tip);
        let newPerson = Number( person );
        let newBill = Number(bill );

        if(bill && !person ) {
            let tipRate = (newBill * newTip) / 100
            setTotalTip( tipRate )

        } else if( bill && person ) {
            let tipRate = (newBill * newTip) / 100
            setTipTotal( tipRate * newPerson )
            setTotalTip( totalTip )
        }
    }

    const calculateBill = ( totalTip, bill ) => {
        const newBill = Number( bill );
        if( bill ) {
        setResult( ( totalTip + newBill ) * peopleCount );
        } else {
            setResult( 0 )
        }
    }

    return(
        <div className="flex flex-col bg-white w-1/2 p-5">
        <CalculateInput value={ bill } setValue={ setBill } name="bill" label="bill" tip={ tip } />
        <div>
            <p className="mb-5">Select Tip %</p>
            <div className="flex flex-wrap gap-2 mb-5">
                {
                    values.map( ( tip,index) => <TipButton tip={ tip } setTip = { setTip } key ={ index } /> )
                }
            </div>
        </div>
        <CalculateInput value={ peopleCount } setValue={ setPeopleCount } name="people" label="Number of people" tip={ tip }/>
        </div>
    )
}

export default Calculate;