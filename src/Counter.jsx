import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    // মান বাড়ানো
    const handleClick = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    // মান কমানো
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount)
        // setCount(count-1) we can also use it like that
    }

    return (
        <div style={{ border: '2px solid yellow' }}>
            <h3>Counter : {count}</h3>
            <button onClick={handleClick}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>

    )
}