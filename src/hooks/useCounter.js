import { useState } from "react"

const useCounter = () => {
    const [count, setCount] = useState(0)

    const add = () => { 
        setTimeout(() => {
            setCount(prevCount => {
                return prevCount + 1})
        }, 2000)

        console.log("count", count)
    }

    return [count, add]
}

export default useCounter
