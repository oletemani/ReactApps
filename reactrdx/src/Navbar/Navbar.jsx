import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to="/home" className="navbar-brand">Redux
                </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto">
    <li className="nav-item"> <Link className="nav-link" to="/message"> Message Redux Examle</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/product">Product  Redux Examle</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/user">User Redux-Thunk Example</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/login">Login</Link></li>
    </div>
  </div>
</nav>
  )
}

export default Navbar