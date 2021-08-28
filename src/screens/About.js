import useCounter from "../hooks/useCounter"

const About = () => {
    const [count, add] = useCounter()
    console.log("count in about scope", count)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => add()}>{"Click me"}</button>
        </div>
    )
}

export default About