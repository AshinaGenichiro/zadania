import React, { useState } from "react";
export default function Counter() { 
const [count,setCount] = useState(0);
function handleSubstraction()
{   
    setCount(count-1);
}
function handleAddition()
{
    setCount(count+1)
}
function handleReset()
{
    setCount(0)
}
return(
<>
<p>Obecna wartość: {count}</p>
<button onClick={() => handleSubstraction()}> Odejmij</button>
<button onClick={() => handleAddition()}> Dodaj</button>
<button onClick={() => handleReset()}> Zresetuj</button>
</>

)

} 