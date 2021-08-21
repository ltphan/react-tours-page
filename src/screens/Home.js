import { useEffect } from "react"
import Button from "../components/item/Button"

const Home = () => {
  useEffect(() => {
    console.log("render in Home")

    return () => console.log("unmounting in Home")
  })

  return <Button />
}

export default Home