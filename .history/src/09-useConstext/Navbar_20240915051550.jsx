import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">UseContext</Link>

          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            
                <NavLink>
                    Home
                </NavLink>

              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}