import { useState } from "react";

export default function Counter(){
    const [count,setCount] = useState(11);
    const handleAdd =() => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount)
    }

    return (
        <div style={{border:"1px solid tomato",borderRadius:"12px"}}>
            <h3>Count: {count}</h3>
             <button style={{margin:"10px"}} onClick={handleAdd}>Increase</button>
             <button onClick={handleReduce}>Decrease</button>
            
        </div>
    );
}