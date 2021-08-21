import { useEffect } from "react";
import Home from "./screens/Home"

function App() {

  useEffect(() => {
    console.log("render in App component")

    return () => console.log("app cleanup")
  })
  
  return <Home />
}

export default App;
