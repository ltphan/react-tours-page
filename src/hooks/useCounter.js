import { useState } from "react"

const useCounter = () => {
    const [count, setCount] = useState(() => 0)

    console.log("in use counter", count)

    const add = () => { 
        setTimeout(() => {
            setCount(prevCount => prevCount + 1)
        }, 3000)
    }

    return [count, add]
}

export default useCounter
