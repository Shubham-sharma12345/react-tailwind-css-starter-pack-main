import { useState } from "react";
import "./App.css";

function App() {
  const[count,setCount]=useState(0);
  function decreaseHandler(){
  setCount(count-1);
  }
  function increaseHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }

  return (
<div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10  bg-slate-600">
<div className="text-[#0398d4] font-medium">Increment & Decrement</div>
<div className="bg-slate-50 flex flex-row  gap-12 py-3 text-[25px]">
<button onClick={decreaseHandler} className="border-r-2 text-center w-20">
  -
</button>
<div className="font-bold gap-12 text-5xl">
{count}
</div>
<button onClick={increaseHandler} className="border-l-2 text-center w-20" >
  + 
</button>
</div>
<button onClick={resetHandler} className="bg-cyan-400 py-2 px-3">
Reset 
</button>
</div>
  );
}

export default App;
