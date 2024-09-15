import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">UseContext</Link>

          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            
                <NavLink 
                    className={(args) => {
                        console.log(args)
                        return 'nav-link'
                    }}
                    to="/">
                    Home
                </NavLink>
                <NavLink 
                    className={(args) => {
                        console.log(args)
                        return 'nav-link'
                    }}
                    to="/about">
                    About
                </NavLink>
              
            </ul>
          </div>
        </div>
      </nav>
    )
}