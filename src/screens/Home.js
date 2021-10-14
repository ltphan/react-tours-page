import { useRef } from "react"

import Tours from "../components/list/Tours"

const Home = () => {

  const inputEl = useRef(null)
  let numRef = useRef(0)

  const onButtonClicked = () => {
    console.log(inputEl.current)
    inputEl.current.focus()
  }

  const increment = () => {
    console.log(numRef.current)
    numRef.current+=1
  }
  console.log("render")

  return (
  <>
    <input ref={inputEl} type="text"/>
    <button onClick={onButtonClicked}>Focus the input</button>
    <button onClick={increment}>Increment</button>
  <Tours />
  </>)
}

export default Home