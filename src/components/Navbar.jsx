import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const userInfo = {is_staff:true, username:'sedat'}
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid d-flex justify-content-between">
                <Link className="navbar-brand" to='/'>Main Page</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                {userInfo?<li><a className="dropdown-item" href="#">logout</a></li>:<li><a className="dropdown-item" href="#">login</a></li>}
                                {userInfo.is_staff&&<li><a className="dropdown-item" href="#">Reservation</a></li>}
                                {userInfo||<li><a className="dropdown-item" href="#">Register</a></li>}
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    {userInfo.username}
                </div>
    
            </div>
        </nav>

    </div>
  )
}

export default Navbar
