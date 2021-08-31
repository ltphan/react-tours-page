import { Link } from "react-router-dom"

const NavBar = () => {
    return (
       <nav>
           <div className="links">
                <Link to="/">Tours</Link>
                <Link to="/closure">Closure</Link>
                <Link to="/callbacks">Callbacks</Link>
                <Link to="/form">Form</Link>
           </div>
       </nav>
    )
}

export default NavBar