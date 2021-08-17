import { useEffect } from "react"

const ShowText = () => {

    useEffect(() => {
        console.log("render in Show Text component")

        return () => console.log("unmounting show text component")
    })

    return (
        <div>{"Show me"}</div>
    )
}

export default ShowText