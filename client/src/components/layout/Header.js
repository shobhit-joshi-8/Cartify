import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to="/" className="navbar-brand">
                            {/* <img src='../../../cartify-favicon.png' alt='brand-image' /> */}
                            Cartify
                        </Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page" >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category" className="nav-link">
                                    Category
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link" >
                                    Register
                                </NavLink>
                            </li>
                             <li className="nav-item">
                                <NavLink to="/login" className="nav-link">
                                    Login
                                </NavLink>
                            </li>
                             <li className="nav-item">
                                <NavLink to="/cart" className="nav-link">
                                    Cart (0)
                                </NavLink>
                            </li>
                        </ul>

                        {/* Uncomment to enable search form */}
                        {/* 
                        <form className="d-flex" role="search">
                            <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                            Search
                            </button>
                        </form>
                        */}
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header