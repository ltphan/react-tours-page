import { useRef } from "react"

const StopWatch = () => {
    const countRef = useRef(0)

    const handleClick = () => {
        countRef.current++ 
    }

    console.log("I rendered")

    return (
        <div>
            <button onClick={handleClick}>{"Click Me"}</button>
        </div>
    )
}

export default StopWatch