import Result from './Component/Result';
import Calculate from "./Component/Calculate";
import {useState} from "react";

function App() {
    const [ result, setResult ] = useState(0);

  return (
      <div className="bg-cyan-100 h-screen flex flex-col justify-center items-center">
          <h2 className="text-2xl text-gray-600">SPLITTER</h2>
          <div className="p-5 flex w-3/4 mx-auto bg-white rounded-xl">
              <Calculate setResult={ setResult } />
              <Result result ={ result } />
          </div>
      </div>
  );
}

export default App;
