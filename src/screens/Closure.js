import useCounter from "../hooks/useCounter"

const Closure = () => {
    const [count, add] = useCounter()

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => add()}>{"Click me"}</button>
        </div>
    )
}

export default Closure