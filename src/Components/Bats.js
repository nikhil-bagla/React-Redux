import React,{useState} from 'react'

function Bats() {
    const [bats, setBats] = useState(5);
    const [val, setVal] = useState("");
    
    return (
        <div>
            <h1>Number of Bats - {bats}</h1>
            <input type="text" value={val}
                onChange={(e) => { setVal(e.target.value) }}/>
            <button
            onClick={()=>{setBats(bats-val)}}>Buy Now</button>
        </div>
    )
}

export default Bats
