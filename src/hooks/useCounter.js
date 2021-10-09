import { useState } from "react"

const useCounter = () => {
    const [count, setCount] = useState(0)

    const add = () => { 
        console.log("called add function")
        setTimeout(() => {
            // setCount(prevCount => {
            //     return prevCount + 1})
            console.log("the count is", count)
            setCount(count + 1)
        }, 2000)

    }

    return [count, add]
}

export default useCounter
