import { useEffect, useState } from "react"

import ShowText from "./ShowText"

const Button = () => {
    const [toggle, setToggle] = useState(true)
    const [random, setRandom] = useState(Math.random())

    useEffect(() => {
        console.log("render in button component")
        console.log("current state of toggle", toggle)
        console.log("current state of random", random)

        return () => console.log("unmounting in button component")
    })

    const handleToggle = () => {
        setToggle((prev) => {
            console.log("previous state of toggle", prev)
            const toggledVal = !prev
            console.log("new state of toggle", toggledVal)
            return toggledVal
        })
        console.log("value of toggle", toggle)
    }

    const reRender = () => {
        setRandom(Math.random())
    }

    return (
    <div>
        <button onClick={handleToggle}>{"Show Text"}</button>
        <button onClick={reRender}>{"Re-render"}</button>
        {toggle && <ShowText />}
    </div>)
}

export default Button