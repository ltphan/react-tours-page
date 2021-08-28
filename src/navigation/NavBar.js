import { Link } from "react-router-dom"

const NavBar = () => {
    return (
       <nav>
           <div className="links">
                <Link to="/">Tours</Link>
                <Link to="/about">About</Link>
                <Link to="/callbacks">Callbacks</Link>
           </div>
       </nav>
    )
}

export default NavBar