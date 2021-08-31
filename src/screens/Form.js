import { useRef, useState } from "react"

const Form = () => {
    const [count, setCount] = useState(0)
    const countRef = useRef()
    countRef.current = count

    const handleClick = () => {
        countRef.current++ 
        setCount(countRef.current)
    }

    console.log("I rendered")

    return (
        <div>
            <button onClick={handleClick}>{"Click Me"}</button>
            <div>{countRef.current}</div>
        </div>
    )
}

export default Form