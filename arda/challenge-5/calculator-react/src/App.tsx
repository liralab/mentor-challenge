import {useState} from "react";
import Result from './Component/Result';
import Calculate from "./Component/Calculate";

function App() {
    const [ result, setResult ] = useState<number>(0);
    const [ totalTip, setTotalTip ] = useState<number>(0);

  return (
      <div className="bg-cyan-100 h-screen flex flex-col justify-center items-center">
          <h2 className="text-2xl text-gray-600">SPLITTER</h2>
          <div className="p-5 flex w-3/4 mx-auto bg-white rounded-xl">
              <Calculate setResult = { setResult } setTotalTip = { setTotalTip } result = { result } />
              <Result result = { result } totalTip = { totalTip } setResult = { setResult } setTotalTip = { setTotalTip } />
          </div>
      </div>
  );
}

export default App;
