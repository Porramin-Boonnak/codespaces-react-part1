import { useState } from "react"
export default function counter() {
    const [count, setcount] = useState(0);
    const [value, setValue] = useState("Type here!");
    return (<>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        <button onClick={() => setcount(count + 1)}>Cilck me</button>
        <button onClick={() => setcount(0)}>Clear</button>
        <h3>You typed {value.length} </h3>
        <p>you cilcked {count} times</p>
    </>);



}